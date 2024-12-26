import { ScrollView, Text, View, Alert } from "react-native";

import { TextInputMask } from "react-native-masked-text";

import { useState, useEffect } from "react";
import { Input } from "@/components/input";
import { s } from "./styles";
import { Button } from "@/components/button";

import { notaStorage } from "@/storage/nota-storage";
import { router } from "expo-router";
import { colors } from "@/styles/colors";
import { format } from "date-fns";

export default function cadNota() {
  const dataAtual = format(new Date(), "dd/MM/yyyy");
  const [data, setData] = useState(dataAtual);
  const [remetente, setRemetente] = useState("");
  const [destinatario, setDestinatario] = useState("");
  const [unidade, setUnidade] = useState("");
  const [ctrc, setCtrc] = useState("");
  const [valorCtrc, setValorCtrc] = useState("");
  const [valorServico, setValorServico] = useState("");

  // Atualiza automaticamente o valor do serviço baseado no valor do CTRC
  useEffect(() => {
    if (valorCtrc) {
      const valorNumerico = parseFloat(
        valorCtrc.replace(/[^\d,]/g, "").replace(",", ".")
      );
      if (!isNaN(valorNumerico)) {
        // Calcula 20% do valor
        let valorServicoCalculado = valorNumerico * 0.2;

        // Aplica os limites
        if (valorServicoCalculado < 80) {
          valorServicoCalculado = 80;
        } else if (valorServicoCalculado > 320) {
          valorServicoCalculado = 320;
        }

        // Atualiza o estado com o valor final formatado
        setValorServico(valorServicoCalculado.toFixed(2));
      }
    }
  }, [valorCtrc]);

  //Mascara para adicionar uma barra assim que digitar uma letra depois do numero
  const aplicarMascara = (text: string) => {
    const regex = /^(\d*)([a-zA-Z]*)$/; // Captura números seguidos por letras
    const match = text.match(regex);

    if (match) {
      const numeros = match[1]; // Números digitados
      const letras = match[2]; // Letras digitadas
      return letras ? `${numeros}/${letras}` : numeros;
    }

    return text;
  };

  const handleChange = (text: string) => {
    const textoMascarado = aplicarMascara(text);
    setCtrc(textoMascarado);
  };

  async function handleAddNota() {
    try {
      if (!data.trim()) {
        return Alert.alert("Data", "Obrigatorio");
      }
      if (!remetente.trim()) {
        return Alert.alert("Remetente", "Obrigatorio");
      }
      if (!destinatario.trim()) {
        return Alert.alert("Destinatario", "Obrigatorio");
      }
      if (!ctrc.trim()) {
        return Alert.alert("CTRC", "Obrigatorio");
      }
      if (!unidade.trim()) {
        return Alert.alert("Unidade", "Obrigatorio");
      }
      if (!valorCtrc.trim()) {
        return Alert.alert("Valor do CTRC", "Obrigatorio");
      }

      await notaStorage.save({
        id: new Date().getTime().toString(),

        data,
        remetente,
        destinatario,
        ctrc,
        unidade,
        valorCtrc,
        valorServico,
      });

      Alert.alert("Sucesso", "Nota foi adicionada em sua lista", [
        { text: "ok", onPress: () => router.back() },
      ]);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar o link");
      console.log(error);
    }
  }

  return (
    <View style={s.container}>
      <View style={s.header}>
        {/* <Image source={require("@/assets/logo.png")} style={s.logo} /> */}
        <Text style={s.text}>
          <Text style={s.fer}>Fer</Text>
          <Text style={s.log}>log</Text>
        </Text>
      </View>

      <Text style={s.title}>Cadastre suas notas</Text>
      <ScrollView>
        <View style={s.form}>
          <TextInputMask
            type={"datetime"}
            options={{ format: "DD/MM/YYYY" }}
            style={s.InputMask}
            placeholder=" DATA: DD/MM/AAAA"
            keyboardType="numeric"
            value={data}
            onChangeText={(text) => setData(text)}
            autoCorrect={false}
            placeholderTextColor={colors.gray[400]}
          />
          <Input
            placeholder="REMETENTE:"
            onChangeText={setRemetente}
            autoCorrect={false}
          />
          <Input
            placeholder="DESTINATARIO:"
            onChangeText={setDestinatario}
            autoCorrect={false}
          />
          <Input
            placeholder="N° CTRC:"
            value={ctrc}
            onChangeText={handleChange}
            autoCorrect={false}
          />
          <Input
            placeholder="UNIDADE:"
            onChangeText={setUnidade}
            autoCorrect={false}
          />

          <TextInputMask
            type={"money"}
            options={{
              precision: 2,
              separator: ",",
              delimiter: ".",
              unit: "R$ ",
              suffixUnit: "",
            }}
            value={valorCtrc}
            onChangeText={(text) => setValorCtrc(text)}
            style={s.InputMask}
            placeholder="VALOR DO CTRC"
            keyboardType="numeric"
            autoCorrect={false}
            placeholderTextColor={colors.gray[400]}
          />

          <TextInputMask
            type={"money"}
            options={{
              precision: 2,
              separator: ",",
              delimiter: ".",
              unit: "R$ ",
              suffixUnit: "",
            }}
            value={`R$ ${valorServico}`}
            editable={false}
            style={s.InputMask}
            placeholder="VALOR DO SERVIÇO"
            keyboardType="numeric"
            autoCorrect={false}
            placeholderTextColor={colors.gray[400]}
          />

          <Button title="ADICIONAR" onPress={handleAddNota} />
        </View>
      </ScrollView>
    </View>
  );
}
