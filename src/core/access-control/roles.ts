import type { Role } from "./access.types";

export const roles: Record<string, Role> = {
  admin: {
    name: "admin",
    displayName: "Administrador",
    permissions: [{ resource: "*", action: "manage" }],
  },
  manager: {
    name: "manager",
    displayName: "Gerente",
    permissions: [
      { resource: "home", action: "read" },
      { resource: "dashboard", action: "manage" },
      { resource: "profile", action: "manage" },
    ],
  },
  employee: {
    name: "employee",
    displayName: "Funcionário",
    permissions: [
      { resource: "home", action: "read" },
      { resource: "dashboard", action: "read" },
      { resource: "profile", action: "read" },
      { resource: "profile", action: "update" },
    ],
  },
  viewer: {
    name: "viewer",
    displayName: "Visualizador",
    permissions: [
      { resource: "home", action: "read" },
      { resource: "dashboard", action: "read" },
      { resource: "profile", action: "read" },
    ],
  },
  guest: {
    name: "guest",
    displayName: "Convidado",
    permissions: [{ resource: "home", action: "read" }],
  },
};
