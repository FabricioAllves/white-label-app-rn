import type { BrandConfig } from "@/src/core/brand/brand.types";
import { brandBLightTheme, brandBDarkTheme } from "./theme";

export const brandBConfig: BrandConfig = {
  id: "brand-b",
  name: "Brand B",
  displayName: "Brand B",
  apiBaseUrl: "https://api.brand-b.com",
  ios: { bundleIdentifier: "com.brandb.app" },
  android: { package: "com.brandb.app" },
  assets: {
    logo: require("./assets/logo.png"),
    icon: require("./assets/icon.png"),
    splash: require("./assets/splash.png"),
  },
  featureFlags: {
    chat: false,
    dashboard: false,
    darkMode: true,
    pushNotifications: false,
  },
  enabledModules: ["home", "profile"],
  lightTheme: brandBLightTheme,
  darkTheme: brandBDarkTheme,
};
