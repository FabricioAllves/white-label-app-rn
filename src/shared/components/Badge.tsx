import { Box, Text, type Theme } from "@/src/core/theme";

type BadgeVariant = "default" | "success" | "warning" | "error" | "info";

interface Props {
  label: string;
  variant?: BadgeVariant;
}

const variantColors: Record<
  BadgeVariant,
  { bg: keyof Theme["colors"]; text: keyof Theme["colors"] }
> = {
  default: { bg: "cardBackground", text: "textSecondary" },
  success: { bg: "statusSuccessLight", text: "statusSuccess" },
  warning: { bg: "statusWarningLight", text: "statusWarning" },
  error: { bg: "statusErrorLight", text: "statusError" },
  info: { bg: "statusInfoLight", text: "statusInfo" },
};

export function Badge({ label, variant = "default" }: Props) {
  const colors = variantColors[variant];

  return (
    <Box
      backgroundColor={colors.bg}
      borderRadius="xs"
      paddingHorizontal="s"
      paddingVertical="xs"
      alignSelf="flex-start"
    >
      <Text variant="caption" color={colors.text}>
        {label}
      </Text>
    </Box>
  );
}
