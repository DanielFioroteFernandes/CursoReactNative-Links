import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

//linksstorage

import { linkStorage } from "@/storage/link-storage";

//icons
import { MaterialIcons } from "@expo/vector-icons";

//componentes
import { Button } from "@/components/button";
import { Categories } from "@/components/categories";
import { Input } from "@/components/input";

//Estilo
import { colors } from "@/styles/colors";
import { styles } from "./styles";

//rotas
import { router } from "expo-router";

export default function Add() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  async function handleAdd() {
    try {
      if (!category) {
        return Alert.alert("Categoria", "Selecione a categoria");
      }
      if (!name.trim()) {
        return Alert.alert("Nome", "Digita o nome");
      }
      if (!url.trim()) {
        return Alert.alert("URL", "Digite a URL");
      }

      await linkStorage.save({
        id: new Date().getTime().toString(),

        name,
        url,
        category,
      });
      Alert.alert("Sucesso", "Novo link adicionado", [
        { text: "ok", onPress: () => router.back() },
      ]);
      // console.log({ category, name, url });
    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar o link");
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>

        <Text style={styles.title}>Novo</Text>
      </View>
      <Text style={styles.label}>Selecione uma categoria</Text>
      <Categories onChange={setCategory} selected={category} />
      <View style={styles.form}>
        <Input placeholder="Nome" onChangeText={setName} autoCorrect={false} />
        <Input
          placeholder="URL"
          onChangeText={setUrl}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <Button title="Adicionar" onPress={handleAdd} />
      </View>
    </View>
  );
}
