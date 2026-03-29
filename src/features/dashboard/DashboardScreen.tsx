import { useTheme } from "@shopify/restyle";
import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { AccessGate } from "@/src/core/access-control";
import { Box, Text, type Theme } from "@/src/core/theme";
import { QuickActions } from "./components/QuickActions";
import { StatsCard } from "./components/StatsCard";
import { mockQuickActions, mockStats } from "./mocks/dashboard.mock";

export function DashboardScreen() {
  const insets = useSafeAreaInsets();
  const theme = useTheme<Theme>();

  return (
    <Box flex={1} backgroundColor="mainBackground">
      <ScrollView
        contentContainerStyle={{
          paddingTop: insets.top + theme.spacing.m,
          paddingBottom: insets.bottom + theme.spacing.l,
          paddingHorizontal: theme.spacing.l,
        }}
      >
        <Text variant="h2" marginBottom="l">
          Dashboard
        </Text>

        <Box gap="s" marginBottom="l">
          <Box flexDirection="row" gap="s">
            <StatsCard stat={mockStats[0]} />
            <StatsCard stat={mockStats[1]} />
          </Box>
          <Box flexDirection="row" gap="s">
            <StatsCard stat={mockStats[2]} />
            <StatsCard stat={mockStats[3]} />
          </Box>
        </Box>

        <AccessGate resource="dashboard" action="manage">
          <Text variant="h3" marginBottom="m">
            Ações rápidas
          </Text>
          <QuickActions actions={mockQuickActions} />
        </AccessGate>
      </ScrollView>
    </Box>
  );
}
