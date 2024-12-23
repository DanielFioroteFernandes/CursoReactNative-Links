import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  primaryTitle: {
    color: colors.green[300],
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryTitle: {
    color: "#ff0000",
    fontSize: 16,
  },
});
