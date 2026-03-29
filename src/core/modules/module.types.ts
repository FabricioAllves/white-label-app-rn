import type { Permission } from "@/src/core/access-control/access.types";

export interface ModuleConfig {
  id: string;
  name: string;
  description?: string;
  icon: string;
  route: string;

  requiredPermissions: Permission[];
  requiredFeatureFlags?: string[];

  availableForBrands?: string[];
  excludedFromBrands?: string[];

  showInTabs: boolean;
  tabOrder: number;
}
