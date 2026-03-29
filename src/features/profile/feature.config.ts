import type { ModuleConfig } from "@/src/core/modules/module.types";

export const profileModuleConfig: ModuleConfig = {
  id: "profile",
  name: "Perfil",
  description: "Perfil do usuário e configurações",
  icon: "person-outline",
  route: "/(app)/(tabs)/profile",
  requiredPermissions: [{ resource: "profile", action: "read" }],
  showInTabs: true,
  tabOrder: 3,
};
