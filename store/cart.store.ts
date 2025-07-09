import { Tables } from "@/database.types";
import { createClient } from "@/lib/supabase/client";
import {
  addItemToCart,
  editCartItem,
  removeItemFromCart,
} from "@/services/cart";
import { Product } from "@/types/globals";
import { create } from "zustand";

type CustomizedCartItem = Omit<Tables<"carts">, "selected_variants"> & {
  selected_variants: Product["variants"];
};
export interface CartItem extends CustomizedCartItem {
  product: Product;
}

interface CartStore {
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
  removeFromCart: (cartItemId: string) => Promise<void>;
  addToCart: (
    product: Product,
    selectedVariants: Product["variants"],
    quantity: number,
  ) => Promise<void>;
  editCartItem: (
    cartItemId: string,
    newSelectedVariants: Product["variants"],
    newQuantity: number,
  ) => Promise<void>;
}

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],
  setCart: (cart) => set({ cart }),
  removeFromCart: async (cartItemId) => {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) throw new Error("User not found");

    const previousCart = get().cart;

    set({
      cart: previousCart.filter((item) => item.id !== cartItemId),
    });

    const { error } = await removeItemFromCart(supabase, cartItemId);

    if (error) {
      set({ cart: previousCart });
      throw new Error(error.message);
    }
  },
  addToCart: async (product, selectedVariants, quantity) => {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) throw new Error("User not found");

    const { data, error } = await addItemToCart(
      supabase,
      product,
      selectedVariants,
      quantity,
    );

    console.log(data);

    if (error) throw new Error(error.message);

    set({ cart: [...get().cart, data] });
  },
  editCartItem: async (cartItemId, newSelectedVariants, newQuantity) => {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) throw new Error("User not found");

    const { data, error } = await editCartItem(
      supabase,
      cartItemId,
      newSelectedVariants,
      newQuantity,
    );

    if (error) throw new Error(error.message);

    const updatedCartItem: CartItem = data;

    set({
      cart: get().cart.map((cartItem) =>
        cartItem.id === updatedCartItem.id ? updatedCartItem : cartItem,
      ),
    });
  },
}));
