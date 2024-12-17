import { Text, Pressable } from "react-native";
import { styles } from "./styles";

import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

export function Category() {
  return (
    <Pressable style={styles.container}>
      <MaterialIcons name="code" size={16} color={colors.gray[400]} />
      <Text style={styles.name}>Projetos</Text>
    </Pressable>
  );
}
