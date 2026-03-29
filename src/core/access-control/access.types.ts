export type RoleName = "admin" | "manager" | "employee" | "viewer" | "guest";

export type PermissionAction =
  | "read"
  | "create"
  | "update"
  | "delete"
  | "manage";

export interface Permission {
  resource: string;
  action: PermissionAction;
}

export interface Role {
  name: RoleName;
  displayName: string;
  permissions: Permission[];
}

export type FeatureFlags = Record<string, boolean>;

export interface AccessState {
  userRole: RoleName | null;
  featureFlags: FeatureFlags;
  brandFeatureFlags: FeatureFlags;
  setUserRole: (role: RoleName) => void;
  setFeatureFlags: (flags: FeatureFlags) => void;
  setBrandFeatureFlags: (flags: FeatureFlags) => void;
  reset: () => void;
}
