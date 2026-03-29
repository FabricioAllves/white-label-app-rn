import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "@shopify/restyle";
import { Alert, Image, Pressable, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { roles, useAccess } from "@/src/core/access-control";
import { useAuth } from "@/src/core/auth";
import { useBrand } from "@/src/core/brand";
import { Box, Card, Text, type Theme } from "@/src/core/theme";
import { ThemeToggle } from "@/src/features/profile/components/ThemeToggle";

export function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const theme = useTheme<Theme>();
  const { user, signOut } = useAuth();
  const { displayName, assets } = useBrand();
  const { userRole } = useAccess();

  const roleName = userRole ? roles[userRole]?.displayName : "Desconhecido";

  function handleSignOut() {
    Alert.alert("Sair", "Tem certeza que deseja sair?", [
      { text: "Cancelar", style: "cancel" },
      { text: "Sair", style: "destructive", onPress: signOut },
    ]);
  }

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
          Perfil
        </Text>

        <Card variant="elevated" marginBottom="l">
          <Box flexDirection="row" alignItems="center">
            <Box
              width={56}
              height={56}
              borderRadius="full"
              backgroundColor="primaryColorLight"
              justifyContent="center"
              alignItems="center"
              marginRight="m"
            >
              <Text variant="h2" color="primaryColor">
                {user?.name?.charAt(0)?.toUpperCase() ?? "?"}
              </Text>
            </Box>
            <Box flex={1}>
              <Text variant="h3">{user?.name}</Text>
              <Text variant="bodySmall">{user?.email}</Text>
              <Box
                backgroundColor="primaryColorLight"
                borderRadius="xs"
                paddingHorizontal="s"
                paddingVertical="xs"
                alignSelf="flex-start"
                marginTop="xs"
              >
                <Text variant="caption" color="primaryColor">
                  {roleName}
                </Text>
              </Box>
            </Box>
          </Box>
        </Card>

        <Card variant="outlined" marginBottom="l">
          <Box flexDirection="row" alignItems="center">
            <Image
              source={assets.logo}
              style={{ width: 32, height: 32, borderRadius: 6 }}
              resizeMode="contain"
            />
            <Box marginLeft="m">
              <Text variant="label">Marca</Text>
              <Text variant="bodySmall">{displayName}</Text>
            </Box>
          </Box>
        </Card>

        <Box marginBottom="l">
          <ThemeToggle />
        </Box>

        <Pressable
          onPress={handleSignOut}
          style={({ pressed }) => ({
            backgroundColor: pressed
              ? theme.colors.statusErrorLight
              : "transparent",
            borderRadius: theme.borderRadii.m,
            paddingVertical: theme.spacing.m,
            paddingHorizontal: theme.spacing.m,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: theme.colors.statusError,
          })}
        >
          <Ionicons
            name="log-out-outline"
            size={22}
            color={theme.colors.statusError}
          />
          <Text variant="label" color="statusError" marginLeft="s">
            Sair da conta
          </Text>
        </Pressable>
      </ScrollView>
    </Box>
  );
}
