import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "@shopify/restyle";

import { Box, Text, type Theme } from "@/src/core/theme";

type IoniconsName = React.ComponentProps<typeof Ionicons>["name"];

interface Props {
  icon?: IoniconsName;
  title: string;
  description?: string;
}

export function EmptyState({
  icon = "folder-open-outline",
  title,
  description,
}: Props) {
  const theme = useTheme<Theme>();

  return (
    <Box flex={1} justifyContent="center" alignItems="center" padding="xl">
      <Ionicons name={icon} size={48} color={theme.colors.iconDefault} />
      <Text variant="h3" textAlign="center" marginTop="m">
        {title}
      </Text>
      {description && (
        <Text variant="bodySmall" textAlign="center" marginTop="s">
          {description}
        </Text>
      )}
    </Box>
  );
}
