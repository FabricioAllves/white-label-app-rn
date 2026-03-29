import type { BrandConfig } from "@/src/core/brand/brand.types";
import { brandADarkTheme, brandALightTheme } from "./theme";

export const brandAConfig: BrandConfig = {
  id: "brand-a",
  name: "Brand A",
  displayName: "Brand A",
  apiBaseUrl: "https://api.brand-a.com",
  ios: { bundleIdentifier: "com.branda.app" },
  android: { package: "com.branda.app" },
  assets: {
    logo: require("./assets/logo.png"),
    icon: require("./assets/icon.png"),
    splash: require("./assets/splash.png"),
  },
  featureFlags: {
    chat: true,
    dashboard: true,
    darkMode: true,
    pushNotifications: true,
  },
  enabledModules: ["home", "dashboard", "profile"],
  lightTheme: brandALightTheme,
  darkTheme: brandADarkTheme,
};
