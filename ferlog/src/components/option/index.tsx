import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { s } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

type Props = TouchableOpacityProps & {
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  variant?: "primary" | "secondary";
};

export function Option({ name, icon, variant = "primary", ...rest }: Props) {
  return (
    <TouchableOpacity style={s.container} {...rest}>
      <MaterialIcons
        name={icon}
        size={20}
        color={variant === "primary" ? colors.green[300] : "#ff0000"}
      />

      <Text style={variant === "primary" ? s.primaryTitle : s.secondaryTitle}>
        {" "}
        {name}
      </Text>
    </TouchableOpacity>
  );
}
