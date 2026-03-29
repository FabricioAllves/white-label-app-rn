import { createTheme } from "@shopify/restyle";

export const palette = {
  // Neutral
  neutral50: "#FAFAFA",
  neutral100: "#F5F5F5",
  neutral200: "#E5E5E5",
  neutral300: "#D4D4D4",
  neutral400: "#A3A3A3",
  neutral500: "#737373",
  neutral600: "#525252",
  neutral700: "#404040",
  neutral800: "#262626",
  neutral900: "#171717",

  // Primary (brands override these via theme spread)
  primary50: "#EFF6FF",
  primary100: "#DBEAFE",
  primary500: "#3B82F6",
  primary600: "#2563EB",
  primary700: "#1D4ED8",

  // Semantic
  success50: "#F0FDF4",
  success500: "#22C55E",
  warning50: "#FFFBEB",
  warning500: "#F59E0B",
  error50: "#FEF2F2",
  error500: "#EF4444",
  info50: "#EFF6FF",
  info500: "#3B82F6",

  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent",
};

export const baseTheme = createTheme({
  colors: {
    // Backgrounds
    mainBackground: palette.white,
    cardBackground: palette.neutral50,
    cardBackgroundElevated: palette.white,

    // Primary
    primaryColor: palette.primary500,
    primaryColorPressed: palette.primary700,
    primaryColorLight: palette.primary50,

    // Text
    textPrimary: palette.neutral900,
    textSecondary: palette.neutral500,
    textInverse: palette.white,
    textLink: palette.primary600,
    textDisabled: palette.neutral300,

    // Borders
    borderDefault: palette.neutral200,
    borderFocused: palette.primary500,

    // Icons
    iconDefault: palette.neutral500,
    iconActive: palette.primary600,

    // Status
    statusSuccess: palette.success500,
    statusSuccessLight: palette.success50,
    statusWarning: palette.warning500,
    statusWarningLight: palette.warning50,
    statusError: palette.error500,
    statusErrorLight: palette.error50,
    statusInfo: palette.info500,
    statusInfoLight: palette.info50,

    // Inputs
    inputBackground: palette.neutral100,
    inputBorder: palette.neutral300,
    inputPlaceholder: palette.neutral400,

    // Tab bar
    tabBarBackground: palette.white,
    tabBarActive: palette.primary600,
    tabBarInactive: palette.neutral400,

    // Misc
    black: palette.black,
    overlay: "rgba(0,0,0,0.5)",
    transparent: palette.transparent,
  },

  spacing: {
    none: 0,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 48,
  },

  borderRadii: {
    none: 0,
    xs: 4,
    s: 8,
    m: 12,
    l: 16,
    xl: 24,
    full: 9999,
  },

  breakpoints: {
    phone: 0,
    tablet: 768,
  },

  textVariants: {
    defaults: {
      color: "textPrimary",
      fontSize: 16,
      lineHeight: 24,
    },
    h1: {
      fontSize: 32,
      lineHeight: 40,
      fontWeight: "700",
      color: "textPrimary",
    },
    h2: {
      fontSize: 24,
      lineHeight: 32,
      fontWeight: "600",
      color: "textPrimary",
    },
    h3: {
      fontSize: 20,
      lineHeight: 28,
      fontWeight: "600",
      color: "textPrimary",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: "textPrimary",
    },
    bodySmall: {
      fontSize: 14,
      lineHeight: 20,
      color: "textSecondary",
    },
    caption: {
      fontSize: 12,
      lineHeight: 16,
      color: "textSecondary",
    },
    button: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: "600",
      color: "textInverse",
    },
    label: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: "500",
      color: "textPrimary",
    },
  },

  cardVariants: {
    defaults: {
      backgroundColor: "cardBackground",
      borderRadius: "m",
      padding: "m",
    },
    elevated: {
      backgroundColor: "cardBackgroundElevated",
      borderRadius: "l",
      padding: "l",
      shadowColor: "black",
      shadowOpacity: 0.08,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 3,
    },
    outlined: {
      backgroundColor: "cardBackground",
      borderRadius: "m",
      padding: "m",
      borderWidth: 1,
      borderColor: "borderDefault",
    },
  },

  buttonVariants: {
    defaults: {
      backgroundColor: "primaryColor",
      borderRadius: "m",
      paddingVertical: "s",
      paddingHorizontal: "l",
    },
    secondary: {
      backgroundColor: "cardBackground",
      borderRadius: "m",
      paddingVertical: "s",
      paddingHorizontal: "l",
      borderWidth: 1,
      borderColor: "borderDefault",
    },
    ghost: {
      backgroundColor: "transparent",
      borderRadius: "m",
      paddingVertical: "s",
      paddingHorizontal: "l",
    },
    danger: {
      backgroundColor: "statusError",
      borderRadius: "m",
      paddingVertical: "s",
      paddingHorizontal: "l",
    },
  },
});

export type Theme = typeof baseTheme;
