import { View, Text, TouchableOpacity, Modal } from "react-native";
import { s } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

type Props = {
  data: string;
  remetente: string;
  destinatario: string;
  ctrc: string;
  unidade: string;
  valorCtrc: string;
  valorServico: string;
};

export function Nota({
  data,
  remetente,
  destinatario,
  ctrc,
  unidade,
  valorCtrc,
  valorServico,
}: Props) {
  return (
    <View style={s.container}>
      <View style={s.details}>
        <Text style={s.data}>{data}</Text>

        <View style={s.row}>
          <Text style={s.textoLista}>{ctrc}</Text>
        </View>
        <View style={s.row}>
          <Text style={s.textoLista} numberOfLines={1}>
            {remetente}
          </Text>
        </View>
      </View>
      <TouchableOpacity>
        <MaterialIcons name="more-horiz" size={20} color={colors.gray[400]} />
      </TouchableOpacity>
    </View>
  );
}
