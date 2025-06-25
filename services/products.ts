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
