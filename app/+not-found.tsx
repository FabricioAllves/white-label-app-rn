import { Link, Stack } from "expo-router";
import { Box, Text } from "@/src/core/theme";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Não encontrado" }} />
      <Box
        flex={1}
        alignItems="center"
        justifyContent="center"
        padding="l"
        backgroundColor="mainBackground"
      >
        <Text variant="h2" marginBottom="m">
          Página não encontrada
        </Text>
        <Link href="/">
          <Text variant="body" color="textLink">
            Voltar ao início
          </Text>
        </Link>
      </Box>
    </>
  );
}
