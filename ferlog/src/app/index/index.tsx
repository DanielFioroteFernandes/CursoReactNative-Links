// react e native
import { Image, Text, View, ScrollView } from "react-native";

//styles
import { s } from "./styles";

// components
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { router } from "expo-router";

export default function Index() {
  return (
    <ScrollView>
      <View style={s.container}>
        <Image source={require("@/assets/logo.png")} style={s.logo} />
        <Text style={s.title}>Bem-Vindo à Ferlog</Text>
        <View style={s.form}>
          <Text style={s.label}>
            Ainda não tem cadastro?{" "}
            <Text
              style={s.link}
              onPress={() => router.navigate("../createUser")}
            >
              Cadastre-se
            </Text>
          </Text>
          <Input placeholder="E-mail:" />
          <Input placeholder="Senha:" secureTextEntry={true} />

          <Text style={s.label}>
            Esqueci minha senha?{" "}
            <Text
              style={s.link}
              onPress={() => alert("Navegar para redefinir senha")}
            >
              Clique aqui
            </Text>
          </Text>

          <Button title="Entrar" onPress={() => router.navigate("/home")} />
        </View>
      </View>
    </ScrollView>
  );
}
