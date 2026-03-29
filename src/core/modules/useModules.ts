import { useMemo } from "react";
import { moduleRegistry } from "./module.registry";
import { useBrand } from "@/src/core/brand/useBrand";
import { useAccess } from "@/src/core/access-control/useAccess";
import type { ModuleConfig } from "./module.types";

export function useModules(): ModuleConfig[] {
  const { brandId, enabledModules } = useBrand();
  const { hasPermissions, isFeatureFlagEnabled } = useAccess();

  return useMemo(() => {
    return moduleRegistry
      .filter((mod) => {
        // Brand enabled modules check
        if (enabledModules && !enabledModules.includes(mod.id)) return false;

        // Brand availability check
        if (
          mod.availableForBrands &&
          !mod.availableForBrands.includes(brandId)
        )
          return false;
        if (mod.excludedFromBrands?.includes(brandId)) return false;

        // Feature flag check
        if (
          mod.requiredFeatureFlags?.some(
            (flag) => !isFeatureFlagEnabled(flag),
          )
        )
          return false;

        // Permission check
        if (!hasPermissions(mod.requiredPermissions)) return false;

        return true;
      })
      .sort((a, b) => a.tabOrder - b.tabOrder);
  }, [brandId, enabledModules, hasPermissions, isFeatureFlagEnabled]);
}

export function useTabModules(): ModuleConfig[] {
  const modules = useModules();
  return useMemo(() => modules.filter((m) => m.showInTabs), [modules]);
}
