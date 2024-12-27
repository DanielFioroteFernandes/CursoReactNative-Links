// react e native
import {
  Alert,
  FlatList,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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
import { Input } from "@/components/input";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const [nota, setNota] = useState<NotaStorage>({} as NotaStorage);

  const [notas, setNotas] = useState<NotaStorage[]>([]);

  const [editMode, setEditMode] = useState(false); // Controla o modo de edição

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
    try {
      // Atualiza a nota no armazenamento usando o método update do notaStorage
      await notaStorage.update(nota);

      // Atualiza o estado local para refletir as alterações
      const updatedNotas = notas.map((item) =>
        item.id === nota.id ? { ...nota } : item
      );
      setNotas(updatedNotas);

      // Fecha o modal
      setShowModal(false);

      Alert.alert("Sucesso", "Nota atualizada com sucesso.");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar as alterações.");
      console.log(error);
    }
  }

  function toggleEditMode() {
    setEditMode((prev) => !prev);
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
                <Input
                  value={nota.data}
                  onChangeText={(text) => setNota({ ...nota, data: text })}
                />
                <Input
                  value={nota.remetente}
                  onChangeText={(text) => setNota({ ...nota, remetente: text })}
                />
                <Input
                  value={nota.destinatario}
                  onChangeText={(text) =>
                    setNota({ ...nota, destinatario: text })
                  }
                />
                <Input
                  value={nota.ctrc}
                  onChangeText={(text) => setNota({ ...nota, ctrc: text })}
                />
                <Input
                  value={nota.unidade}
                  onChangeText={(text) => setNota({ ...nota, unidade: text })}
                />
                <Input
                  value={nota.valorCtrc}
                  onChangeText={(text) => setNota({ ...nota, valorCtrc: text })}
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
