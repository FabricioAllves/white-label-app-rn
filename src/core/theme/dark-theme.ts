import { baseTheme, palette, type Theme } from "./base-theme";

export const darkTheme: Theme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    mainBackground: palette.neutral900,
    cardBackground: palette.neutral800,
    cardBackgroundElevated: palette.neutral700,

    textPrimary: palette.neutral50,
    textSecondary: palette.neutral400,
    textInverse: palette.neutral900,
    textDisabled: palette.neutral600,

    borderDefault: palette.neutral700,
    borderFocused: palette.primary500,

    iconDefault: palette.neutral400,

    inputBackground: palette.neutral800,
    inputBorder: palette.neutral600,
    inputPlaceholder: palette.neutral500,

    tabBarBackground: palette.neutral900,

    statusSuccessLight: "#052E16",
    statusWarningLight: "#451A03",
    statusErrorLight: "#450A0A",
    statusInfoLight: "#172554",
  },
};
