import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  title: {
    color: colors.green[900],
    fontSize: 22,
  },
  header: {
    paddingHorizontal: 24,
  },
  logo: {
    height: 32,
    width: 38,
  },
});
