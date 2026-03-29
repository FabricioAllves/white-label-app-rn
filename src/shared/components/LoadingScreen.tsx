import { Box, Text } from "@/src/core/theme";
import { ActivityIndicator } from "react-native";

interface Props {
  message?: string;
}

export function LoadingScreen({ message = "Carregando..." }: Props) {
  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor="mainBackground"
    >
      <ActivityIndicator size="large" />
      <Text variant="bodySmall" marginTop="m">
        {message}
      </Text>
    </Box>
  );
}
