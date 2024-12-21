import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  title: {
    color: colors.green[300],
    fontSize: 22,
  },
  header: {
    paddingHorizontal: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
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
  // logo: {
  //   height: 100,
  //   width: 100,
  // },
});
