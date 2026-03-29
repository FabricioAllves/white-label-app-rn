import { Pressable } from "react-native";
import { useRouter } from "expo-router";
import { useTheme } from "@shopify/restyle";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box, Text, type Theme } from "@/src/core/theme";

export default function UnauthorizedScreen() {
  const router = useRouter();
  const theme = useTheme<Theme>();
  const insets = useSafeAreaInsets();

  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor="mainBackground"
      paddingHorizontal="l"
      style={{ paddingTop: insets.top }}
    >
      <Text variant="h2" textAlign="center" marginBottom="m">
        Acesso Negado
      </Text>
      <Text variant="bodySmall" textAlign="center" marginBottom="xl">
        Você não tem permissão para acessar este módulo. Entre em contato com o
        administrador.
      </Text>
      <Pressable
        onPress={() => router.replace("/(app)/(tabs)/home")}
        style={({ pressed }) => ({
          backgroundColor: pressed
            ? theme.colors.primaryColorPressed
            : theme.colors.primaryColor,
          borderRadius: theme.borderRadii.m,
          paddingVertical: theme.spacing.s + 4,
          paddingHorizontal: theme.spacing.xl,
        })}
      >
        <Text variant="button">Voltar ao Início</Text>
      </Pressable>
    </Box>
  );
}
