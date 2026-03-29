import { createContext, type ReactNode } from "react";
import Constants from "expo-constants";
import { getBrandConfig } from "./brand.registry";
import type { BrandConfig } from "./brand.types";
import type { Theme } from "@/src/core/theme/types";

interface BrandContextValue extends BrandConfig {
  brandId: string;
}

export const BrandContext = createContext<BrandContextValue | null>(null);

interface Props {
  children: ReactNode;
}

export function BrandProvider({ children }: Props) {
  const brandId =
    (Constants.expoConfig?.extra?.brandId as string) ?? "brand-a";
  const config = getBrandConfig(brandId);

  const value: BrandContextValue = {
    ...config,
    brandId,
  };

  return (
    <BrandContext.Provider value={value}>{children}</BrandContext.Provider>
  );
}
