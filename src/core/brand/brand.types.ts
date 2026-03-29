import type { ImageSourcePropType } from "react-native";
import type { Theme } from "@/src/core/theme/types";

export interface BrandAssets {
  logo: ImageSourcePropType;
  icon: ImageSourcePropType;
  splash: ImageSourcePropType;
}

export interface BrandConfig {
  id: string;
  name: string;
  displayName: string;

  apiBaseUrl: string;

  ios: {
    bundleIdentifier: string;
  };
  android: {
    package: string;
  };

  assets: BrandAssets;

  featureFlags: Record<string, boolean>;
  enabledModules?: string[];

  lightTheme?: Theme;
  darkTheme?: Theme;
}
