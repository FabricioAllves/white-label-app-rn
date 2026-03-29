import { brandAConfig } from "@/src/brands/brand-a/brand.config";
import { brandBConfig } from "@/src/brands/brand-b/brand.config";
import type { BrandConfig } from "./brand.types";

export const brandRegistry: Record<string, BrandConfig> = {
  "brand-a": brandAConfig,
  "brand-b": brandBConfig,
};

export function getBrandConfig(brandId: string): BrandConfig {
  const config = brandRegistry[brandId];
  if (!config) {
    throw new Error(`Unknown brand: ${brandId}. Available: ${Object.keys(brandRegistry).join(", ")}`);
  }
  return config;
}
