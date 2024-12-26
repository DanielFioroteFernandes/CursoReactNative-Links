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

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const [nota, setNota] = useState<NotaStorage>({} as NotaStorage);

  const [notas, setNotas] = useState<NotaStorage[]>([]);

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
    setShowModal(true);

    setNota(selected);
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
              <Text style={s.modalCategory}>Detalhes da nota</Text>
              <TouchableOpacity>
                <MaterialIcons
                  onPress={() => setShowModal(false)}
                  name="close"
                  size={25}
                  color={"#ff0000"}
                />
              </TouchableOpacity>
            </View>
            <Text style={s.modalContentInfo}>{nota.data}</Text>
            <Text style={s.modalContentInfo}>{nota.remetente}</Text>
            <Text style={s.modalContentInfo}>{nota.destinatario}</Text>
            <Text style={s.modalContentInfo}>{nota.ctrc}</Text>
            <Text style={s.modalContentInfo}>{nota.unidade}</Text>
            <Text style={s.modalContentInfo}>{nota.valorCtrc}</Text>
            <View style={s.modalFooter}>
              <Option
                name="Excluir"
                icon="delete"
                variant="secondary"
                onPress={handleRemove}
              />
              <Option name="Editar" icon="edit" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
