import { SupabaseClient } from "@supabase/supabase-js";

export const getAllCategories = (client: SupabaseClient) => {
  return client.from("categories").select("*");
};
