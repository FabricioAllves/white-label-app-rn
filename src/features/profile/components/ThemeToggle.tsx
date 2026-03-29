import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "@shopify/restyle";
import { Pressable } from "react-native";

import { Box, Text, type Theme, useThemeStore } from "@/src/core/theme";

export function ThemeToggle() {
  const theme = useTheme<Theme>();
  const { colorMode, setColorMode } = useThemeStore();

  const options = [
    { value: "light" as const, label: "Claro", icon: "sunny-outline" as const },
    { value: "dark" as const, label: "Escuro", icon: "moon-outline" as const },
    {
      value: "system" as const,
      label: "Sistema",
      icon: "phone-portrait-outline" as const,
    },
  ];

  return (
    <Box>
      <Text variant="label" marginBottom="s">
        Tema
      </Text>
      <Box flexDirection="row" gap="s">
        {options.map((opt) => {
          const isActive = colorMode === opt.value;
          return (
            <Pressable
              key={opt.value}
              onPress={() => setColorMode(opt.value)}
              style={{ flex: 1 }}
            >
              <Box
                backgroundColor={
                  isActive ? "primaryColorLight" : "cardBackground"
                }
                borderRadius="m"
                padding="m"
                alignItems="center"
                borderWidth={1}
                borderColor={isActive ? "primaryColor" : "borderDefault"}
              >
                <Ionicons
                  name={opt.icon}
                  size={22}
                  color={
                    isActive
                      ? theme.colors.primaryColor
                      : theme.colors.iconDefault
                  }
                />
                <Text
                  variant="caption"
                  color={isActive ? "primaryColor" : "textSecondary"}
                  marginTop="xs"
                >
                  {opt.label}
                </Text>
              </Box>
            </Pressable>
          );
        })}
      </Box>
    </Box>
  );
}
