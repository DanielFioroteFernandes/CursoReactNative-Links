// react e native
import { Image, TouchableOpacity, View, ScrollView, Text } from "react-native";

// styles
import { colors } from "@/styles/colors";
import { s } from "./styles";

// icones
import { Nota } from "@/components/nota";
import { MaterialIcons } from "@expo/vector-icons";

export default function Home() {
  return (
    <ScrollView>
      <View style={s.container}>
        <View style={s.header}>
          {/* <Image source={require("@/assets/logo.png")} style={s.logo} /> */}
          <Text style={s.text}>
            <Text style={s.fer}>Fer</Text>
            <Text style={s.log}>log</Text>
          </Text>
          <TouchableOpacity>
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
      </View>
    </ScrollView>
  );
}
