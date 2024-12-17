import { Image, View } from "react-native";

import { s } from "./styles";

export default function Index() {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <Image source={require("@/assets/logo.png")} style={s.logo} />
      </View>
    </View>
  );
}
