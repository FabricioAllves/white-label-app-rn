import { Stack } from "expo-router";
import { Redirect } from "expo-router";
import { useAccess } from "@/src/core/access-control";

export default function DashboardLayout() {
  const { canAccessModule } = useAccess();

  if (!canAccessModule("dashboard", [{ resource: "dashboard", action: "read" }])) {
    return <Redirect href="/(app)/unauthorized" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
