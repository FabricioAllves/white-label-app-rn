import { Redirect } from "expo-router";
import { useAuthStore } from "@/src/core/auth";
import { Box, Text } from "@/src/core/theme";
import { ActivityIndicator } from "react-native";

export default function Index() {
  const { isAuthenticated, isLoading } = useAuthStore();

  if (isLoading) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center" backgroundColor="mainBackground">
        <ActivityIndicator size="large" />
        <Text variant="bodySmall" marginTop="m">
          Carregando...
        </Text>
      </Box>
    );
  }

  if (isAuthenticated) {
    return <Redirect href="/(app)/(tabs)/home" />;
  }

  return <Redirect href="/(auth)/sign-in" />;
}
