import { useTheme } from "@shopify/restyle";
import { ActivityIndicator, Pressable } from "react-native";

import { Text, type Theme } from "@/src/core/theme";

interface ButtonProps {
  label: string;
  onPress?: () => void;
  variant?: "defaults" | "secondary" | "ghost" | "danger";
  loading?: boolean;
  disabled?: boolean;
}

export function Button({
  label,
  onPress,
  variant = "defaults",
  loading = false,
  disabled = false,
}: ButtonProps) {
  const theme = useTheme<Theme>();
  const buttonStyle =
    theme.buttonVariants[variant] ?? theme.buttonVariants.defaults;

  const textColor =
    variant === "secondary" || variant === "ghost"
      ? "textPrimary"
      : "textInverse";

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={({ pressed }) => ({
        backgroundColor: (buttonStyle as any).backgroundColor
          ? theme.colors[
              (buttonStyle as any).backgroundColor as keyof typeof theme.colors
            ]
          : theme.colors.primaryColor,
        borderRadius:
          theme.borderRadii[
            (buttonStyle as any).borderRadius as keyof typeof theme.borderRadii
          ] ?? 12,
        paddingVertical: theme.spacing.s + 4,
        paddingHorizontal: theme.spacing.l,
        alignItems: "center" as const,
        opacity: pressed || disabled ? 0.7 : 1,
        borderWidth: (buttonStyle as any).borderWidth ?? 0,
        borderColor: (buttonStyle as any).borderColor
          ? theme.colors[
              (buttonStyle as any).borderColor as keyof typeof theme.colors
            ]
          : "transparent",
      })}
    >
      {loading ? (
        <ActivityIndicator
          color={
            variant === "secondary" || variant === "ghost"
              ? theme.colors.textPrimary
              : theme.colors.textInverse
          }
        />
      ) : (
        <Text variant="button" color={textColor}>
          {label}
        </Text>
      )}
    </Pressable>
  );
}
