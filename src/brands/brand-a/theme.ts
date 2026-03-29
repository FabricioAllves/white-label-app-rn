import { baseTheme, palette, type Theme } from "@/src/core/theme/base-theme";

const brandPalette = {
  primary50: "#EFF6FF",
  primary500: "#3B82F6",
  primary600: "#2563EB",
  primary700: "#1D4ED8",
};

export const brandALightTheme: Theme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    primaryColor: brandPalette.primary500,
    primaryColorPressed: brandPalette.primary700,
    primaryColorLight: brandPalette.primary50,
    textLink: brandPalette.primary600,
    tabBarActive: brandPalette.primary600,
    iconActive: brandPalette.primary600,
    borderFocused: brandPalette.primary500,
  },
};

export const brandADarkTheme: Theme = {
  ...brandALightTheme,
  colors: {
    ...brandALightTheme.colors,
    mainBackground: palette.neutral900,
    cardBackground: palette.neutral800,
    cardBackgroundElevated: palette.neutral700,
    textPrimary: palette.neutral50,
    textSecondary: palette.neutral400,
    textInverse: palette.neutral900,
    textDisabled: palette.neutral600,
    borderDefault: palette.neutral700,
    inputBackground: palette.neutral800,
    inputBorder: palette.neutral600,
    inputPlaceholder: palette.neutral500,
    tabBarBackground: palette.neutral900,
    iconDefault: palette.neutral400,
    statusSuccessLight: "#052E16",
    statusWarningLight: "#451A03",
    statusErrorLight: "#450A0A",
    statusInfoLight: "#172554",
  },
};
