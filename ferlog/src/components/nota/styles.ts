import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    gap: 12,
  },
  details: {
    flex: 1,
    padding: 5,
  },
  data: {
    color: colors.green[300],
    fontSize: 16,
    fontWeight: "600", // Made the font bold for emphasis

    marginBottom: 5, // Added spacing between text fields
  },
  textoLista: {
    color: colors.gray[500],
    fontSize: 15,
    fontWeight: "500", // Lighter font weight for a less heavy feel
    marginBottom: 5, // Space between each text item
    lineHeight: 20, // Added line height for better readability
    textTransform: "uppercase",
  },
  iconDetalhes: {
    padding: 5,
  },
});
