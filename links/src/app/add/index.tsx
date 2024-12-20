import { useState } from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, Alert } from "react-native";

import { styles } from "./styles";

import { Categories } from "@/components/categories";

import { Input } from "@/components/input";
import { Button } from "@/components/button";

import { colors } from "@/styles/colors";
import { router } from "expo-router";

export default function Add() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  function handleAdd() {
    if (!category) {
      return Alert.alert("Categoria", "Selecione a categoria");
    }
    if (!name.trim()) {
      return Alert.alert("Nome", "Digita o nome");
    }
    if (!url.trim()) {
      return Alert.alert("URL", "Digite a URL");
    }
    console.log({ category, name, url });
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
        <Input placeholder="URL" onChangeText={setUrl} />
        <Button title="Adicionar" onPress={handleAdd} />
      </View>
    </View>
  );
}
