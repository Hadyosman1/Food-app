import { SupabaseClient } from "@supabase/supabase-js";

export async function getWishlist(client: SupabaseClient, userId: string) {
  return client.from("wishlists").select("product_id").eq("user_id", userId);
}

export async function addToWishlist(
  client: SupabaseClient,
  userId: string,
  productId: string,
) {
  return client
    .from("wishlists")
    .insert({ user_id: userId, product_id: productId });
}

export async function removeFromWishlist(
  client: SupabaseClient,
  userId: string,
  productId: string,
) {
  return client
    .from("wishlists")
    .delete()
    .eq("user_id", userId)
    .eq("product_id", productId);
}
