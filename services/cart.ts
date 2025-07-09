import { SupabaseClient } from "@supabase/supabase-js";
import { Product } from "../types/globals";

export const getCart = async (client: SupabaseClient, userId: string) => {
  return client
    .from("carts")
    .select(`*, product:products(*)`)
    .eq("user_id", userId);
};

export const removeItemFromCart = async (
  client: SupabaseClient,
  cartItemId: string,
) => {
  return client.from("carts").delete().eq("id", cartItemId);
};

export const addItemToCart = async (
  client: SupabaseClient,
  product: Product,
  selectedVariants: Product["variants"],
  quantity: number,
) => {
  const {
    data: { user },
  } = await client.auth.getUser();

  if (!user) throw new Error("User not found");

  return client
    .from("carts")
    .insert({
      user_id: user.id,
      product_id: product.id,
      selected_variants: selectedVariants,
      quantity,
    })
    .select(`*, product:products(*)`)
    .single();
};

export const editCartItem = async (
  client: SupabaseClient,
  cartItemId: string,
  newSelectedVariants: Product["variants"],
  newQuantity: number,
) => {
  const {
    data: { user },
  } = await client.auth.getUser();

  if (!user) throw new Error("User not found");

  return client
    .from("carts")
    .update({ selected_variants: newSelectedVariants, quantity: newQuantity })
    .eq("id", cartItemId)
    .eq("user_id", user.id)
    .select(`*, product:products(*)`)
    .single();
};
