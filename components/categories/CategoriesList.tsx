import { getAllCategories } from "@/services/categories";
import CategoryCard from "./CategoryCard";
import { InfoIcon } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default async function CategoriesList() {
  const supabaseClient = await createClient();

  const { data: categories, error } = await getAllCategories(supabaseClient);

  if (error) {
    console.error(error);
    return (
      <Alert variant="destructive" className="mt-6">
        <InfoIcon />
        <AlertTitle>Error while fetching categories</AlertTitle>
        <AlertDescription>{error?.message}</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] md:gap-6">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}
