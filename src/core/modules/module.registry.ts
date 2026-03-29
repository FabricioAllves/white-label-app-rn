import { homeModuleConfig } from "@/src/features/home/feature.config";
import { dashboardModuleConfig } from "@/src/features/dashboard/feature.config";
import { profileModuleConfig } from "@/src/features/profile/feature.config";
import type { ModuleConfig } from "./module.types";

export const moduleRegistry: ModuleConfig[] = [
  homeModuleConfig,
  dashboardModuleConfig,
  profileModuleConfig,
];

export function getModuleById(id: string): ModuleConfig | undefined {
  return moduleRegistry.find((m) => m.id === id);
}
