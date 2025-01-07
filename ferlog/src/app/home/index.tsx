// react e native
import {
  Alert,
  FlatList,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useCalculoServico } from "@/hooks/useCalculoServico";

import { InputMask } from "@/components/InputMask";
import { Input } from "@/components/input";
import { Nota } from "@/components/nota";
import { Option } from "@/components/option";

// styles
import { colors } from "@/styles/colors";
import { s } from "./styles";

import { notaStorage, NotaStorage } from "@/storage/nota-storage";

// icones

import { MaterialIcons } from "@expo/vector-icons";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const [nota, setNota] = useState<NotaStorage>({} as NotaStorage);

  const [notas, setNotas] = useState<NotaStorage[]>([]);

  const [editMode, setEditMode] = useState(false); // Controla o modo de edição

  const {
    valorCtrc,
    setValorCtrc,
    valorServico,
    updateValorServico,
    resetCalculoServico,
  } = useCalculoServico();

  // função para pegar notas cadastrada
  async function getNotas() {
    try {
      const response = await notaStorage.get();
      setNotas(response);
    } catch (error) {
      Alert.alert("Error", "Não foi possível listar os dados.");
    }
  }

  // função para utilizar o setShowModal paraabrir e fechar
  function handleDetails(selected: NotaStorage) {
    setNota(selected);
    setValorCtrc(selected.valorCtrc || ""); // Carrega o valor CTRC no hook
    updateValorServico(selected.valorServico || ""); // Carrega o valor do serviço no hook
    setEditMode(false);
    setShowModal(true);
  }

  // função handleremove e nota remove pararemover nota
  async function notaRemove() {
    try {
      await notaStorage.remove(nota.id);
      getNotas();
      setShowModal(false);
    } catch (error) {
      Alert.alert("Error", "Não foi possível excluir a nota selecionada");
      console.log(error);
    }
  }

  function handleRemove() {
    Alert.alert("Excluir", "Deseja realmente excluir?", [
      { style: "cancel", text: "Não" },
      { text: "Sim", onPress: () => notaRemove() },
    ]);
  }

  async function handleEditSave() {
    if (!nota.remetente || !nota.destinatario || !nota.data) {
      Alert.alert("Erro", "Preencha todos os campos obrigatórios.");
      return;
    }

    try {
      const updatedNota = {
        ...nota,
        valorCtrc,
        valorServico,
      };

      await notaStorage.update(updatedNota);

      const updatedNotas = notas.map((item) =>
        item.id === nota.id ? updatedNota : item
      );
      setNotas(updatedNotas);
      setShowModal(false);
      Alert.alert("Sucesso", "Nota atualizada com sucesso.");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar as alterações.");
      console.error(error);
    }
  }

  function toggleEditMode() {
    setEditMode((prev) => {
      if (!prev) {
        // Reseta o estado dos campos no modo edição
        setValorCtrc(nota.valorCtrc || "");
        updateValorServico(nota.valorServico || "");
      }
      return !prev;
    });
  }

  useFocusEffect(
    useCallback(() => {
      getNotas();
    }, [])
  );

  return (
    <View style={s.container}>
      <View style={s.header}>
        {/* <Image source={require("@/assets/logo.png")} style={s.logo} /> */}
        <Text style={s.text}>
          <Text style={s.fer}>Fer</Text>
          <Text style={s.log}>log</Text>
        </Text>
        <TouchableOpacity onPress={() => router.navigate("/cadNota")}>
          <MaterialIcons name="add" size={42} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={notas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Nota
            data={item.data}
            remetente={item.remetente}
            destinatario={item.destinatario}
            ctrc={item.ctrc}
            unidade={item.unidade}
            valorCtrc={item.valorCtrc}
            valorServico={item.valorServico}
            onDetails={() => handleDetails(item)}
          />
        )}
        contentContainerStyle={s.notasContent}
      />

      <Modal transparent visible={showModal} animationType="slide">
        <View style={s.modal}>
          <View style={s.modalContent}>
            <View style={s.modalHeader}>
              <Text style={s.modalCategory}>
                {editMode ? "Editar Nota" : "Detalhes da Nota"}
              </Text>
              <TouchableOpacity>
                <MaterialIcons
                  onPress={() => setShowModal(false)}
                  name="close"
                  size={25}
                  color={"#ff0000"}
                />
              </TouchableOpacity>
            </View>
            {/* Campos de edição ou exibição */}
            {editMode ? (
              <View>
                <InputMask
                  type="datetime"
                  options={{ format: "DD/MM/YYYY" }}
                  keyboardType="numeric"
                  placeholder="DATA:"
                  value={nota.data}
                  onChangeText={(text) => setNota({ ...nota, data: text })}
                />
                <Input
                  value={nota.remetente}
                  placeholder="REMETENTE:"
                  onChangeText={(text) => setNota({ ...nota, remetente: text })}
                />
                <Input
                  value={nota.destinatario}
                  placeholder="DESTINATARIO:"
                  onChangeText={(text) =>
                    setNota({ ...nota, destinatario: text })
                  }
                />
                <Input
                  value={nota.ctrc}
                  placeholder="CTRC:"
                  onChangeText={(text) => setNota({ ...nota, ctrc: text })}
                />
                <Input
                  value={nota.unidade}
                  placeholder="UNIDADE:"
                  onChangeText={(text) => setNota({ ...nota, unidade: text })}
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
                  keyboardType="numeric"
                  value={valorCtrc}
                  onChangeText={(text) => {
                    setValorCtrc(text);
                    resetCalculoServico();
                  }}
                  placeholder="VALOR DO CTRC:"
                />

                <InputMask
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
                  placeholder="VALOR DO SERVIÇO"
                  keyboardType="numeric"
                  autoCorrect={false}
                  onChangeText={(text) => updateValorServico(text)}
                />
                {/* Adicione mais campos editáveis conforme necessário */}
              </View>
            ) : (
              <View>
                <Text style={s.modalContentInfo}>{nota.data}</Text>
                <Text style={s.modalContentInfo}>{nota.remetente}</Text>
                <Text style={s.modalContentInfo}>{nota.destinatario}</Text>
                <Text style={s.modalContentInfo}>{nota.ctrc}</Text>
                <Text style={s.modalContentInfo}>{nota.unidade}</Text>
                <Text style={s.modalContentInfo}>{nota.valorCtrc}</Text>
                <Text style={s.modalContentInfo}>{nota.valorServico}</Text>
                {/* Adicione mais informações conforme necessário */}
              </View>
            )}

            <View style={s.modalFooter}>
              {editMode ? (
                <Option name="Salvar" icon="save" onPress={handleEditSave} />
              ) : (
                <View style={s.modalFooter}>
                  <Option name="Editar" icon="edit" onPress={toggleEditMode} />
                  <Option
                    name="Delete"
                    icon="delete"
                    onPress={handleRemove}
                    variant={"secondary"}
                  />
                </View>
              )}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
