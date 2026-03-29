import { useTheme } from "@shopify/restyle";
import { Image, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { AccessGate } from "@/src/core/access-control";
import { useAuth } from "@/src/core/auth";
import { useBrand } from "@/src/core/brand";
import { useModules } from "@/src/core/modules";
import { Box, Card, Text, type Theme } from "@/src/core/theme";

export function HomeScreen() {
  const insets = useSafeAreaInsets();
  const theme = useTheme<Theme>();
  const { user } = useAuth();
  const { displayName, assets } = useBrand();
  const modules = useModules();

  return (
    <Box flex={1} backgroundColor="mainBackground">
      <ScrollView
        contentContainerStyle={{
          paddingTop: insets.top + theme.spacing.m,
          paddingBottom: insets.bottom + theme.spacing.l,
          paddingHorizontal: theme.spacing.l,
        }}
      >
        {/* Header */}
        <Box flexDirection="row" alignItems="center" marginBottom="l">
          <Image
            source={assets.logo}
            style={{ width: 40, height: 40, borderRadius: 8 }}
            resizeMode="contain"
          />
          <Box marginLeft="m" flex={1}>
            <Text variant="bodySmall">Bem-vindo ao</Text>
            <Text variant="h3">{displayName}</Text>
          </Box>
        </Box>

        <Card variant="elevated" marginBottom="l">
          <Text variant="h2" marginBottom="xs">
            Olá, {user?.name ?? "Usuário"}!
          </Text>
          <Text variant="bodySmall">
            Você está logado como{" "}
            <Text variant="bodySmall" color="primaryColor">
              {user?.role}
            </Text>
          </Text>
        </Card>

        {/* Available Modules */}
        <Text variant="h3" marginBottom="m">
          Módulos disponíveis
        </Text>
        <Box gap="s">
          {modules.map((mod) => (
            <Card key={mod.id} variant="outlined">
              <Box flexDirection="row" alignItems="center">
                <Box
                  width={40}
                  height={40}
                  borderRadius="m"
                  backgroundColor="primaryColorLight"
                  justifyContent="center"
                  alignItems="center"
                  marginRight="m"
                >
                  <Text variant="body" color="primaryColor">
                    {mod.name.charAt(0)}
                  </Text>
                </Box>
                <Box flex={1}>
                  <Text variant="label">{mod.name}</Text>
                  {mod.description && (
                    <Text variant="caption">{mod.description}</Text>
                  )}
                </Box>
              </Box>
            </Card>
          ))}
        </Box>

        <AccessGate resource="*" action="manage">
          <Box marginTop="l">
            <Card
              variant="elevated"
              style={{ backgroundColor: theme.colors.statusInfoLight }}
            >
              <Text variant="label" color="statusInfo">
                Painel Admin
              </Text>
              <Text variant="caption" color="statusInfo" marginTop="xs">
                Você tem acesso total ao sistema como administrador.
              </Text>
            </Card>
          </Box>
        </AccessGate>
      </ScrollView>
    </Box>
  );
}
