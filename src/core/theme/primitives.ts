import {
  createBox,
  createText,
  createRestyleComponent,
  createVariant,
  type VariantProps,
} from "@shopify/restyle";
import type { Theme } from "./base-theme";

export const Box = createBox<Theme>();
export const Text = createText<Theme>();

export const Card = createRestyleComponent<
  VariantProps<Theme, "cardVariants"> & React.ComponentProps<typeof Box>,
  Theme
>([createVariant({ themeKey: "cardVariants" })], Box);
