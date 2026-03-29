import { useCallback, useMemo } from "react";
import { useAccessStore } from "./access.store";
import { roles } from "./roles";
import type { Permission } from "./access.types";

export function useAccess() {
  const { userRole, featureFlags, brandFeatureFlags } = useAccessStore();

  const rolePermissions = useMemo(() => {
    if (!userRole) return [];
    return roles[userRole]?.permissions ?? [];
  }, [userRole]);

  const hasPermission = useCallback(
    (resource: string, action: string): boolean => {
      if (!userRole) return false;
      return rolePermissions.some(
        (p) =>
          (p.resource === "*" || p.resource === resource) &&
          (p.action === "manage" || p.action === action),
      );
    },
    [rolePermissions, userRole],
  );

  const hasPermissions = useCallback(
    (required: Permission[]): boolean => {
      return required.every((p) => hasPermission(p.resource, p.action));
    },
    [hasPermission],
  );

  const isFeatureFlagEnabled = useCallback(
    (flag: string): boolean => {
      if (brandFeatureFlags[flag] !== undefined) return brandFeatureFlags[flag];
      return featureFlags[flag] ?? false;
    },
    [featureFlags, brandFeatureFlags],
  );

  const canAccessModule = useCallback(
    (moduleId: string, requiredPermissions: Permission[] = []): boolean => {
      if (!hasPermissions(requiredPermissions)) return false;
      return true;
    },
    [hasPermissions],
  );

  return {
    userRole,
    hasPermission,
    hasPermissions,
    isFeatureFlagEnabled,
    canAccessModule,
  };
}
