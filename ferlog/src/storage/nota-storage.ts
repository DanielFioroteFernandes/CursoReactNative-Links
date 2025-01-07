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

async function update(updatedNota: NotaStorage) {
  try {
    const storage = await get();
    const notaExists = storage.some((nota) => nota.id === updatedNota.id);

    if (!notaExists) {
      throw new Error("Nota não encontrada para atualização.");
    }

    const updatedStorage = storage.map((nota) =>
      nota.id === updatedNota.id ? updatedNota : nota
    );

    await AsyncStorage.setItem(
      NOTAS_STORAGE_KEY,
      JSON.stringify(updatedStorage)
    );
  } catch (error) {
    console.error("Erro ao atualizar a nota:", error);
    throw error;
  }
}

export const notaStorage = { get, save, remove, update };
