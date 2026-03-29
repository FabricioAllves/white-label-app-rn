import type { ModuleConfig } from "@/src/core/modules/module.types";

export const dashboardModuleConfig: ModuleConfig = {
  id: "dashboard",
  name: "Dashboard",
  description: "Painel com estatísticas e ações rápidas",
  icon: "bar-chart-outline",
  route: "/(app)/(tabs)/dashboard",
  requiredPermissions: [{ resource: "dashboard", action: "read" }],
  requiredFeatureFlags: ["dashboard"],
  showInTabs: true,
  tabOrder: 2,
};
