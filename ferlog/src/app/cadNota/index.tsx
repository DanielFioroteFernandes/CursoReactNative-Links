import { Alert, ScrollView, Text, View } from "react-native";

import { TextInputMask } from "react-native-masked-text";

//hooks
import { useCalculoServico } from "@/hooks/useCalculoServico";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { useState } from "react";
import { s } from "./styles";

import { InputMask } from "@/components/InputMask";
import { notaStorage } from "@/storage/nota-storage";
import { colors } from "@/styles/colors";
import { format } from "date-fns";
import { router } from "expo-router";

export default function cadNota() {
  const dataAtual = format(new Date(), "dd/MM/yyyy");

  const [data, setData] = useState(dataAtual);
  const [remetente, setRemetente] = useState("");
  const [destinatario, setDestinatario] = useState("");
  const [unidade, setUnidade] = useState("");
  const [ctrc, setCtrc] = useState("");
  // const [valorCtrc, setValorCtrc] = useState("");
  // const [valorServico, setValorServico] = useState("");

  const { valorCtrc, setValorCtrc, valorServico } = useCalculoServico();

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
          <InputMask
            type="datetime"
            options={{ format: "DD/MM/YYYY" }}
            placeholder="DATA: "
            keyboardType="numeric"
            value={data}
            onChangeText={(text) => setData(text)}
            autoCorrect={false}
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
          <InputMask
            type="money"
            options={{
              precision: 2,
              separator: ",",
              delimiter: ".",
              unit: "R$ ",
              suffixUnit: "",
            }}
            onChangeText={(text) => setValorCtrc(text)}
            placeholder="VALOR DO CTRC:"
            keyboardType="numeric"
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
