import { SupabaseClient } from "@supabase/supabase-js";

export const getAllCategories = async (client: SupabaseClient) => {
  return client.from("categories").select("*");
};

export const getCategoryById = async (client: SupabaseClient, id: string) => {
  return client.from("categories").select("*").eq("id", id).single();
};

export const getCategoryBySlug = async (
  client: SupabaseClient,
  slug: string,
) => {
  return client.from("categories").select("*").eq("slug", slug).single();
};
