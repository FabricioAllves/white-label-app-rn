import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

const KEYS = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
  USER: "user_data",
} as const;

async function setItem(key: string, value: string): Promise<void> {
  if (Platform.OS === "web") {
    localStorage.setItem(key, value);
    return;
  }
  await SecureStore.setItemAsync(key, value);
}

async function getItem(key: string): Promise<string | null> {
  if (Platform.OS === "web") {
    return localStorage.getItem(key);
  }
  return SecureStore.getItemAsync(key);
}

async function deleteItem(key: string): Promise<void> {
  if (Platform.OS === "web") {
    localStorage.removeItem(key);
    return;
  }
  await SecureStore.deleteItemAsync(key);
}

export const secureStore = {
  KEYS,
  setItem,
  getItem,
  deleteItem,

  async saveTokens(accessToken: string, refreshToken: string) {
    await Promise.all([
      setItem(KEYS.ACCESS_TOKEN, accessToken),
      setItem(KEYS.REFRESH_TOKEN, refreshToken),
    ]);
  },

  async getTokens() {
    const [accessToken, refreshToken] = await Promise.all([
      getItem(KEYS.ACCESS_TOKEN),
      getItem(KEYS.REFRESH_TOKEN),
    ]);
    return { accessToken, refreshToken };
  },

  async clearTokens() {
    await Promise.all([
      deleteItem(KEYS.ACCESS_TOKEN),
      deleteItem(KEYS.REFRESH_TOKEN),
      deleteItem(KEYS.USER),
    ]);
  },

  async saveUser(user: object) {
    await setItem(KEYS.USER, JSON.stringify(user));
  },

  async getUser<T>(): Promise<T | null> {
    const data = await getItem(KEYS.USER);
    if (!data) return null;
    return JSON.parse(data) as T;
  },
};
