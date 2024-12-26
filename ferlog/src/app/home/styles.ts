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
  modal: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: colors.gray[900],
    borderTopWidth: 1,
    borderTopColor: colors.gray[800],
    paddingBottom: 42,
    padding: 24,
  },
  modalHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },

  modalCategory: {
    flex: 1,
    fontSize: 20,
    fontWeight: "500",
    color: colors.gray[400],
    textAlign: "center",
  },
  modalContentInfo: {
    fontSize: 17,
    fontWeight: "600",
    color: colors.gray[500],
    textTransform: "uppercase",
  },
  modalFooter: {
    flexDirection: "row",
    marginTop: 32,
    width: "100%",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: colors.gray[600],
    paddingVertical: 14,
  },

  notasContent: {
    gap: 10,
    padding: 15,
  },
});
