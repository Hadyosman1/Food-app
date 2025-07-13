"use client";

import { formatCurrency } from "@/lib/utils";
import { Product, VariantOption } from "@/types/globals";
import { SetStateAction } from "react";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface ProductVariantsProps {
  product: Product;
  selectedVariants: Product["variants"];
  setSelectedVariants: React.Dispatch<SetStateAction<Product["variants"]>>;
}

const ProductVariants = ({
  product,
  selectedVariants,
  setSelectedVariants,
}: ProductVariantsProps) => {
  const handleToggleMultipleOptionsVariant = (
    variantName: string,
    variantOption: VariantOption,
  ) => {
    setSelectedVariants((prev) => {
      let isHandled = false;
      const updatedSelectedVariants: Product["variants"] = JSON.parse(
        JSON.stringify(prev ?? []),
      );

      if (!updatedSelectedVariants) return [];

      updatedSelectedVariants.forEach((variant) => {
        if (variant.name === variantName) {
          isHandled = true;
          const index = variant.options.findIndex(
            (option) => option.name === variantOption.name,
          );

          if (index == -1) {
            variant.options = [...variant.options, variantOption];
          } else {
            variant.options = [
              ...variant.options.filter(
                (option) => option.name !== variantOption.name,
              ),
            ];
          }
        }
      });

      if (!isHandled) {
        updatedSelectedVariants.push({
          name: variantName,
          type: "multiple",
          options: [variantOption],
        });
      }

      return updatedSelectedVariants;
    });
  };

  const handleChooseSingleOptionVariant = (
    variantName: string,
    variantOption: VariantOption,
  ) => {
    setSelectedVariants((prev) => {
      const updatedSelectedVariants: Product["variants"] = JSON.parse(
        JSON.stringify(prev ?? []),
      );

      let handled = false;

      if (!updatedSelectedVariants) return [];

      updatedSelectedVariants.forEach((variant) => {
        if (variant.name === variantName) {
          variant.options = [variantOption];
          handled = true;
        }
      });

      if (!handled) {
        updatedSelectedVariants.push({
          name: variantName,
          type: "single",
          options: [variantOption],
        });
      }

      return updatedSelectedVariants;
    });
  };

  const isVariantOptionSelected = (variantName: string, optionName: string) => {
    if (!selectedVariants) return false;

    for (let i = 0; i < selectedVariants.length; i++) {
      const currVar = selectedVariants[i];
      if (currVar.name !== variantName) continue;
      for (let j = 0; j < currVar.options.length; j++) {
        const option = currVar.options[j];
        if (option.name === optionName) {
          return true;
        }
      }
    }

    return false;
  };

  return (
    <div className="space-y-2">
      <form className="flex flex-col gap-2">
        {product.variants?.map((variant) => (
          <div
            key={variant.name}
            className="bg-sidebar w-fit space-y-2.5 rounded-2xl border p-2.5"
          >
            <h3 className="text-primary font-semibold capitalize">
              <Badge variant="secondary">{variant.name}</Badge>
            </h3>
            <div className="flex flex-wrap gap-x-1 gap-y-2">
              {variant.options.map((variantOption) => {
                const id = `${variant.name.replace(/\s/g, "_")}-${variantOption.name.replace(/\s/g, "_")}`;

                const extraPrice =
                  variantOption.extra_price > 0
                    ? formatCurrency(variantOption.extra_price)
                    : "Included";

                const isSelected = isVariantOptionSelected(
                  variant.name,
                  variantOption.name,
                );

                return (
                  <Label
                    htmlFor={id}
                    className="bg-sidebar-accent hover:bg-sidebar-accent/60 flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-2 text-xs transition-colors duration-200 has-[:checked]:outline-2"
                    key={variantOption.name}
                  >
                    <div className="flex flex-col gap-1 text-center">
                      <span className="">{variantOption.name}</span>
                      <Badge
                        variant="outline"
                        className="border-primary bg-primary/20"
                      >
                        {extraPrice}
                      </Badge>
                    </div>

                    <Input
                      onChange={() => {
                        if (variant.type === "single") {
                          handleChooseSingleOptionVariant(
                            variant.name,
                            variantOption,
                          );
                        } else {
                          handleToggleMultipleOptionsVariant(
                            variant.name,
                            variantOption,
                          );
                        }
                      }}
                      id={id}
                      checked={isSelected}
                      name={variant.name.replace(/\s/g, "_")}
                      type={variant.type === "single" ? "radio" : "checkbox"}
                      className="accent-primary size-3 shrink-0"
                    />
                  </Label>
                );
              })}
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};

export default ProductVariants;
