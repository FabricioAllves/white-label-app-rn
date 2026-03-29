import type { ModuleConfig } from "@/src/core/modules/module.types";

export const homeModuleConfig: ModuleConfig = {
  id: "home",
  name: "Home",
  description: "Tela inicial do app",
  icon: "home-outline",
  route: "/(app)/(tabs)/home",
  requiredPermissions: [{ resource: "home", action: "read" }],
  showInTabs: true,
  tabOrder: 1,
};
