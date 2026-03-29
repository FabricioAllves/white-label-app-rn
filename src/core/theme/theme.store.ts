import { create } from "zustand";

type ColorMode = "light" | "dark" | "system";

interface ThemeState {
  colorMode: ColorMode;
  setColorMode: (mode: ColorMode) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  colorMode: "system",
  setColorMode: (mode) => set({ colorMode: mode }),
}));
