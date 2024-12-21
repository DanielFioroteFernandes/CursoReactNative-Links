import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    gap: 12,
    marginBottom: 5, // Added margin between items
  },
  details: {
    flex: 1,
    padding: 20, // Reduced padding to give a cleaner look
    marginBottom: 3, // More space between each item
  },
  data: {
    color: colors.gray[300],
    fontSize: 16,
    fontWeight: "600", // Made the font bold for emphasis

    marginBottom: 5, // Added spacing between text fields
  },
  textoLista: {
    color: colors.gray[600],
    fontSize: 14,
    fontWeight: "500", // Lighter font weight for a less heavy feel
    marginBottom: 5, // Space between each text item
    lineHeight: 20, // Added line height for better readability
  },

  row: {
    flexDirection: "row",
  },
});
