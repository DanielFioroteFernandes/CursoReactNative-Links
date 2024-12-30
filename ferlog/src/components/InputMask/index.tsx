import { s } from "./styles";
import { colors } from "@/styles/colors";
import { TextInputMask, TextInputMaskProps } from "react-native-masked-text";

export function InputMask({ ...rest }: TextInputMaskProps) {
  return (
    <TextInputMask
      style={s.container}
      {...rest}
      placeholderTextColor={colors.gray[400]}
    />
  );
}
