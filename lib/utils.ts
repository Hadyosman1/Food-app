import { useAuthModalStore } from "@/store/authModal.store";
import { Product } from "@/types/globals";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { createClient } from "./supabase/client";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(price: number) {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EGP",
  }).format(price);
}

export function withAuthRequired<T extends unknown[], R>(
  fn: (...args: T) => R | Promise<R>,
  message?: string,
): (...args: T) => Promise<R | void> {
  return async (...args: T): Promise<R | void> => {
    const setIsAuthModalOpen = useAuthModalStore.getState().setIsOpen;
    const setMessage = useAuthModalStore.getState().setMessage;

    const supabase = createClient();
    const { data, error } = await supabase.auth.getUser();

    if (!data.user || error) {
      setIsAuthModalOpen(true);
      setMessage(message ?? "Login required for this action");
      return;
    }

    return fn(...args);
  };
}

export const getInitialSelectedVariants = (variants: Product["variants"]) => {
  const selectedVariants: Product["variants"] = [];

  variants?.forEach((variant) => {
    variant.options.forEach((option) => {
      if (option.extra_price === 0) {
        selectedVariants.push({
          ...variant,
          options: [option],
        });
      }
    });
  });

  return selectedVariants;
};

export const getSelectedVariantsPrice = (
  selectedVariants: Product["variants"],
) => {
  let totalPrice = 0;

  selectedVariants?.forEach((variant) => {
    variant.options.forEach((option) => {
      totalPrice += option.extra_price;
    });
  });

  return totalPrice;
};

export const getProductTotalPrice = (
  basePrice: number,
  selectedVariants: Product["variants"],
  quantity: number,
) => {
  const totalPrice = basePrice + getSelectedVariantsPrice(selectedVariants);

  return totalPrice * quantity;
};
