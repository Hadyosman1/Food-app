import { Tables } from "@/database.types";

type VariantType = "single" | "multiple";

interface VariantOption {
  name: string;
  extra_price: number;
}

interface ProductVariant {
  name: string;
  type: VariantType;
  options: VariantOption[];
}

export type Product = Omit<Tables<"products">, "variants"> & {
  variants: ProductVariant[] | null;
};
