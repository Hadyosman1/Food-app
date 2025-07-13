import { SupabaseClient } from "@supabase/supabase-js";

export async function getProductsByCollectionId(
  client: SupabaseClient,
  collectionId: string,
) {
  return client
    .from("products_collections")
    .select("products(*)")
    .eq("collection_id", collectionId)
    .eq("products.is_available", true);
}

export async function getProductById(
  client: SupabaseClient,
  productId: string,
) {
  return client
    .from("products")
    .select("*")
    .eq("id", productId)
    .eq("is_available", true)
    .single();
}

export const getProductsByCategoryId = async (
  client: SupabaseClient,
  categoryId: string,
) => {
  return client
    .from("products")
    .select("*")
    .eq("category_id", categoryId)
    .eq("is_available", true);
};
