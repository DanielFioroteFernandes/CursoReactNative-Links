import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  header: {
    paddingHorizontal: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    color: colors.green[300],
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
  },
  form: {
    padding: 24,
    gap: 16,
  },
  text: {
    fontSize: 40, // Tamanho do texto geral
    fontWeight: "bold",
  },
  fer: {
    color: colors.green[300], // Cor para "Fer" (verde, por exemplo)
  },
  log: {
    color: "#ffffff", // Cor para "log" (laranja, por exemplo)
  },
  InputMask: {
    height: 42,
    width: "100%",
    backgroundColor: colors.gray[900],
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.gray[800],
    padding: 10,
    color: colors.gray[100],
    fontSize: 16,
  },
});
