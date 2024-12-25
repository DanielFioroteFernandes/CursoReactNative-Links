import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

import { s } from "./styles";

//Routes

import { Picker } from "@react-native-picker/picker";

//componentes

import { Button } from "@/components/button";
import { Input } from "@/components/input";

export default function createUser() {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <ScrollView>
      <View style={s.container}>
        <Image source={require("@/assets/logo.png")} style={s.logo} />
        <Text style={s.title}>Cadastre-se na Ferlog</Text>
        <View style={s.form}>
          <Input placeholder="Nome:" />
          <Input placeholder="E-mail:" />
          <Input placeholder="Senha:" secureTextEntry={true} />

          <Text style={s.label}>Selecione uma opção:</Text>

          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
            style={s.selecao}
          >
            <Picker.Item label="Motorista" value="motorista" />
            <Picker.Item label="Ajudante" value="ajudante" />
          </Picker>

          <Button title="Cadastrar" />
        </View>
      </View>
    </ScrollView>
  );
}
