// react e native
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { Nota } from "@/components/nota";
import { Option } from "@/components/option";
// styles
import { colors } from "@/styles/colors";
import { s } from "./styles";

// icones

import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { router } from "expo-router";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <ScrollView>
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

        <Nota
          data="15/05/2025"
          remetente="danie fiorote fernandes Santoscrus tope e linha"
          destinatario="Janio Fiorote"
          ctrc="176052/V"
          unidade="20"
          valorCtrc="250,00"
          valorServico="80,00"
        />
        <Nota
          data="15/05/2025"
          remetente="danie fiorote"
          destinatario="Janio Fiorote"
          ctrc="176052/V"
          unidade="20"
          valorCtrc="250,00"
          valorServico="80,00"
        />
        <Nota
          data="15/05/2025"
          remetente="danie fiorote"
          destinatario="Janio Fiorote"
          ctrc="125485"
          unidade="20"
          valorCtrc="250,00"
          valorServico="80,00"
        />
        <Nota
          data="15/05/2025"
          remetente="danie fiorote"
          destinatario="Janio Fiorote"
          ctrc="125485"
          unidade="20"
          valorCtrc="250,00"
          valorServico="80,00"
        />
        <Nota
          data="15/05/2025"
          remetente="danie fiorote"
          destinatario="Janio Fiorote"
          ctrc="125485"
          unidade="20"
          valorCtrc="250,00"
          valorServico="80,00"
        />
        <Nota
          data="15/05/2025"
          remetente="danie fiorote"
          destinatario="Janio Fiorote"
          ctrc="125485"
          unidade="20"
          valorCtrc="250,00"
          valorServico="80,00"
        />
        <Nota
          data="15/05/2025"
          remetente="danie fiorote"
          destinatario="Janio Fiorote"
          ctrc="125485"
          unidade="20"
          valorCtrc="250,00"
          valorServico="80,00"
        />
        <Nota
          data="15/05/2025"
          remetente="danie fiorote"
          destinatario="Janio Fiorote"
          ctrc="125485"
          unidade="20"
          valorCtrc="250,00"
          valorServico="80,00"
        />
        <Nota
          data="15/05/2025"
          remetente="danie fiorote"
          destinatario="Janio Fiorote"
          ctrc="125485"
          unidade="20"
          valorCtrc="250,00"
          valorServico="80,00"
        />
        <Nota
          data="15/05/2025"
          remetente="danie fiorote"
          destinatario="Janio Fiorote"
          ctrc="125485"
          unidade="20"
          valorCtrc="250,00"
          valorServico="80,00"
        />
        <Nota
          data="15/05/2025"
          remetente="danie fiorote"
          destinatario="Janio Fiorote"
          ctrc="125485"
          unidade="20"
          valorCtrc="250,00"
          valorServico="80,00"
        />
        <Nota
          data="15/05/2025"
          remetente="danie fiorote"
          destinatario="Janio Fiorote"
          ctrc="176052/V"
          unidade="20"
          valorCtrc="250,00"
          valorServico="80,00"
        />
        <Nota
          data="15/05/2025"
          remetente="danie fiorote"
          destinatario="Janio Fiorote"
          ctrc="176052/V"
          unidade="20"
          valorCtrc="250,00"
          valorServico="80,00"
        />
        <Nota
          data="15/05/2025"
          remetente="danie fiorote"
          destinatario="Janio Fiorote"
          ctrc="176052/V"
          unidade="20"
          valorCtrc="250,00"
          valorServico="80,00"
        />
        <Nota
          data="15/05/2025"
          remetente="danie fiorote"
          destinatario="Janio Fiorote"
          ctrc="176052/V"
          unidade="20"
          valorCtrc="250,00"
          valorServico="80,00"
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
    </ScrollView>
  );
}
