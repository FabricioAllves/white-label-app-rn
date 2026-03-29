import { Redirect, Slot } from "expo-router";
import { ActivityIndicator } from "react-native";
import { useAuthStore } from "@/src/core/auth";
import { Box, Text } from "@/src/core/theme";

export default function AppLayout() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const isLoading = useAuthStore((s) => s.isLoading);

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

  if (!isAuthenticated) {
    return <Redirect href="/(auth)/sign-in" />;
  }

  return <Slot />;
}
