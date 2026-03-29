import type { ConfigContext, ExpoConfig } from "expo/config";

const BRAND = process.env.BRAND || "brand-a";

const brandConfigs: Record<string, Partial<ExpoConfig>> = {
  "brand-a": {
    name: "Brand A",
    slug: "whitelabel-brand-a",
    scheme: "branda",
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.branda.app",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./src/brands/brand-a/assets/icon.png",
        backgroundColor: "#FFFFFF",
      },
      package: "com.branda.app",
    },
    icon: "./src/brands/brand-a/assets/icon.png",
    splash: {
      image: "./src/brands/brand-a/assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#FFFFFF",
    },
  },
  "brand-b": {
    name: "Brand B",
    slug: "whitelabel-brand-b",
    scheme: "brandb",
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.brandb.app",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./src/brands/brand-b/assets/icon.png",
        backgroundColor: "#FFFFFF",
      },
      package: "com.brandb.app",
    },
    icon: "./src/brands/brand-b/assets/icon.png",
    splash: {
      image: "./src/brands/brand-b/assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#FFFFFF",
    },
  },
};

export default ({ config }: ConfigContext): ExpoConfig => {
  const brand = brandConfigs[BRAND] ?? brandConfigs["brand-a"];

  return {
    ...config,
    name: brand.name ?? "Whitelabel App",
    slug: brand.slug ?? "whitelabel-app",
    version: "1.0.0",
    orientation: "portrait",
    icon: brand.icon,
    scheme: brand.scheme,
    userInterfaceStyle: "automatic",
    splash: brand.splash,
    ios: brand.ios,
    android: brand.android,
    web: {
      bundler: "metro",
      output: "static",
    },
    plugins: ["expo-router", "expo-secure-store"],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      brandId: BRAND,
      eas: {
        projectId: "your-eas-project-id",
      },
    },
  };
};
