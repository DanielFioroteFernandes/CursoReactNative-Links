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
  onDetails: () => void;
};

export function Nota({
  data,
  remetente,
  destinatario,
  ctrc,
  unidade,
  valorCtrc,
  valorServico,
  onDetails,
}: Props) {
  return (
    <View style={s.container}>
      <View style={s.details}>
        <Text style={s.data}>{data}</Text>

        <Text style={s.textoLista}>{ctrc}</Text>

        <Text style={s.textoLista} numberOfLines={1}>
          {remetente}
        </Text>
      </View>
      <TouchableOpacity style={s.iconDetalhes} onPress={onDetails}>
        <MaterialIcons name="more-horiz" size={30} color={colors.green[300]} />
      </TouchableOpacity>
    </View>
  );
}
