import AsyncStorage from "@react-native-async-storage/async-storage";

const NOTAS_STORAGE_KEY = "notas-storage";

export type NotaStorage = {
  id: string;
  data: string;
  remetente: string;
  destinatario: string;
  ctrc: string;
  unidade: string;
  valorCtrc: string;
  valorServico: string;
};

async function get(): Promise<NotaStorage[]> {
  const storage = await AsyncStorage.getItem(NOTAS_STORAGE_KEY);
  const response = storage ? JSON.parse(storage) : [];

  return response;
}

async function save(newNota: NotaStorage) {
  try {
    const storage = await get();
    const update = JSON.stringify([...storage, newNota]);

    await AsyncStorage.setItem(NOTAS_STORAGE_KEY, update);
  } catch (error) {
    throw error;
  }
}

async function remove(id: string) {
  try {
    const storage = await get();

    const update = storage.filter((nota) => nota.id !== id);

    await AsyncStorage.setItem(NOTAS_STORAGE_KEY, JSON.stringify(update));
  } catch (error) {
    throw error;
  }
}

// Função para atualizar uma nota existente
async function update(updatedNota: NotaStorage) {
  try {
    const notas = await get(); // Obter todas as notas armazenadas
    const index = notas.findIndex((nota) => nota.id === updatedNota.id);

    if (index === -1) throw new Error("Nota não encontrada.");

    notas[index] = updatedNota; // Atualizar a nota correspondente
    await AsyncStorage.setItem("notas", JSON.stringify(notas));
  } catch (error) {
    console.error("Erro ao atualizar a nota:", error);
    throw error;
  }
}

export const notaStorage = { get, save, remove, update };
