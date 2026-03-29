import { Box, Text, Card } from "@/src/core/theme";
import type { DashboardStat } from "../types/dashboard.types";

interface Props {
  stat: DashboardStat;
}

export function StatsCard({ stat }: Props) {
  const isPositive = (stat.change ?? 0) >= 0;

  return (
    <Card variant="elevated" flex={1}>
      <Text variant="caption" marginBottom="xs">
        {stat.label}
      </Text>
      <Text variant="h2" marginBottom="xs">
        {stat.value}
      </Text>
      {stat.change !== undefined && (
        <Box flexDirection="row" alignItems="center">
          <Text
            variant="caption"
            color={isPositive ? "statusSuccess" : "statusError"}
          >
            {isPositive ? "+" : ""}
            {stat.change}%
          </Text>
          {stat.changeLabel && (
            <Text variant="caption" marginLeft="xs">
              {stat.changeLabel}
            </Text>
          )}
        </Box>
      )}
    </Card>
  );
}
