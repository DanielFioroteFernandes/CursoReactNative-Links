import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";

export const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    color: colors.gray[400],
    fontSize: 14,
    paddingHorizontal: 10,
  },
  link: {
    color: colors.green[300], // Define a cor do link
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
  logo: {
    height: 300,
    width: 400,
  },
});