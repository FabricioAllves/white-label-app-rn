import { create } from "zustand";
import type { AccessState } from "./access.types";

export const useAccessStore = create<AccessState>((set) => ({
  userRole: null,
  featureFlags: {},
  brandFeatureFlags: {},

  setUserRole: (role) => set({ userRole: role }),
  setFeatureFlags: (flags) => set({ featureFlags: flags }),
  setBrandFeatureFlags: (flags) => set({ brandFeatureFlags: flags }),
  reset: () =>
    set({ userRole: null, featureFlags: {}, brandFeatureFlags: {} }),
}));
