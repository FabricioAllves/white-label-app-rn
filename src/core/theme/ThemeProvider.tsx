import { ThemeProvider as RestyleThemeProvider } from "@shopify/restyle";
import { useColorScheme } from "react-native";
import type { ReactNode } from "react";
import { baseTheme } from "./base-theme";
import { darkTheme } from "./dark-theme";
import { useThemeStore } from "./theme.store";
import { useBrand } from "@/src/core/brand/useBrand";

interface Props {
  children: ReactNode;
}

export function ThemeProvider({ children }: Props) {
  const systemColorScheme = useColorScheme();
  const { colorMode } = useThemeStore();
  const { lightTheme, darkTheme: brandDarkTheme } = useBrand();

  const isDark =
    colorMode === "dark" ||
    (colorMode === "system" && systemColorScheme === "dark");

  const lightBase = lightTheme ?? baseTheme;
  const darkBase = brandDarkTheme ?? darkTheme;
  const activeTheme = isDark ? darkBase : lightBase;

  return (
    <RestyleThemeProvider theme={activeTheme}>{children}</RestyleThemeProvider>
  );
}
