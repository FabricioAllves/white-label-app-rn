import { Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "@shopify/restyle";

import { Box, Text, type Theme } from "@/src/core/theme";
import type { QuickAction } from "../types/dashboard.types";

type IoniconsName = React.ComponentProps<typeof Ionicons>["name"];

interface Props {
  actions: QuickAction[];
}

export function QuickActions({ actions }: Props) {
  const theme = useTheme<Theme>();

  return (
    <Box flexDirection="row" flexWrap="wrap" gap="s">
      {actions.map((action) => (
        <Pressable
          key={action.id}
          onPress={action.onPress}
          style={({ pressed }) => ({
            flex: 1,
            minWidth: "45%",
            opacity: pressed ? 0.7 : 1,
          })}
        >
          <Box
            backgroundColor="cardBackgroundElevated"
            borderRadius="m"
            padding="m"
            alignItems="center"
            borderWidth={1}
            borderColor="borderDefault"
          >
            <Box
              width={44}
              height={44}
              borderRadius="full"
              backgroundColor="primaryColorLight"
              justifyContent="center"
              alignItems="center"
              marginBottom="s"
            >
              <Ionicons
                name={action.icon as IoniconsName}
                size={22}
                color={theme.colors.primaryColor}
              />
            </Box>
            <Text variant="label" textAlign="center">
              {action.label}
            </Text>
          </Box>
        </Pressable>
      ))}
    </Box>
  );
}
