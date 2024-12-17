import { Image, View, TouchableOpacity } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "@/styles/colors";
import { s } from "./styles";

//components

import { Category } from "@/components/category";

export default function Index() {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <Image source={require("@/assets/logo.png")} style={s.logo} />

        <TouchableOpacity>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>
      <Category name="Projeto" icon="code" />
      <Category name="Site" icon="language" />

      <Category name="Video" icon="movie" />
    </View>
  );
}
