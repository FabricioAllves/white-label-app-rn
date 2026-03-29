import { Tabs } from "expo-router";
import { useTheme } from "@shopify/restyle";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useTabModules } from "@/src/core/modules";
import type { Theme } from "@/src/core/theme";

type IoniconsName = React.ComponentProps<typeof Ionicons>["name"];

const ICON_MAP: Record<string, IoniconsName> = {
  "home-outline": "home-outline",
  "bar-chart-outline": "bar-chart-outline",
  "person-outline": "person-outline",
};

export default function TabsLayout() {
  const tabModules = useTabModules();
  const theme = useTheme<Theme>();

  function isModuleVisible(moduleId: string) {
    return tabModules.find((m) => m.id === moduleId) ? undefined : (null as any);
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.tabBarActive,
        tabBarInactiveTintColor: theme.colors.tabBarInactive,
        tabBarStyle: {
          backgroundColor: theme.colors.tabBarBackground,
          borderTopColor: theme.colors.borderDefault,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          href: isModuleVisible("home"),
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          href: isModuleVisible("dashboard"),
          title: "Dashboard",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bar-chart-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          href: isModuleVisible("profile"),
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
