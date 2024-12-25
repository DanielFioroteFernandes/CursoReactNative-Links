// react e native
import {
  Alert,
  FlatList,
  Modal,
  ScrollView,
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
import { useState, useEffect } from "react";
import { router } from "expo-router";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const [notas, setNotas] = useState<NotaStorage[]>([]);

  async function getNotas() {
    try {
      const response = await notaStorage.get();
      setNotas(response);
    } catch (error) {
      Alert.alert("Error", "Não foi possível listar os dados.");
    }
  }

  useEffect(() => {
    getNotas();
  }, []);

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
          />
        )}
        contentContainerStyle={s.notasContent}
      />
      <Modal transparent visible={showModal}>
        <View style={s.modal}>
          <View style={s.modalContent}>
            <View style={s.modalHeader}>
              <Text style={s.modalCategory}>Detalhes da nota</Text>
              <TouchableOpacity>
                <MaterialIcons
                  name="close"
                  size={20}
                  color={colors.gray[400]}
                />
              </TouchableOpacity>
            </View>
            <Text style={s.modalContentInfo}>Data:</Text>
            <Text style={s.modalContentInfo}>Remetente:</Text>
            <Text style={s.modalContentInfo}>Destinatario:</Text>
            <Text style={s.modalContentInfo}>Unidade::</Text>
            <Text style={s.modalContentInfo}>N° CTRC:</Text>
            <Text style={s.modalContentInfo}>Valor CTRC:</Text>
            <View style={s.modalFooter}>
              <Option name="Excluir" icon="delete" variant="secondary" />
              <Option name="Editar" icon="edit" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
