import { Text, Pressable, PressableProps } from "react-native";
import { styles } from "./styles";

import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

type Props = PressableProps & {
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export function Category({ name, icon, ...rest }: Props) {
  return (
    <Pressable style={styles.container} {...rest}>
      <MaterialIcons name={icon} size={16} color={colors.gray[400]} />
      <Text style={styles.name}>{name}</Text>
    </Pressable>
  );
}
