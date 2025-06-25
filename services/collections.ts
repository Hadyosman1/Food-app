import { SupabaseClient } from "@supabase/supabase-js";

export async function getAllCollections(client: SupabaseClient) {
  return client
    .from("collections")
    .select("*")
    .order("order", { ascending: true });
}
