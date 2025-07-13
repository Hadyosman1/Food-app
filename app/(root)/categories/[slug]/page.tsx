import MainHeading from "@/components/MainHeading";
import ProductCard from "@/components/products/ProductCard";
import ProductsGrid from "@/components/products/ProductsGrid";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tables } from "@/database.types";
import { createClient } from "@/lib/supabase/server";
import { getCategoryBySlug } from "@/services/categories";
import { getProductsByCategoryId } from "@/services/products";
import { Product } from "@/types/globals";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const supabase = await createClient();

  const { error: categoryError, data } = await getCategoryBySlug(
    supabase,
    slug,
  );

  if (!data) {
    notFound();
  }

  const category = data as Tables<"categories">;

  const { error: productsError, data: categoryProducts } =
    await getProductsByCategoryId(supabase, category.id);

  if (productsError || categoryError) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          {productsError?.message || categoryError?.message}
        </AlertDescription>
      </Alert>
    );
  }

  const products = categoryProducts as Product[];

  return (
    <main>
      <div className="container space-y-12 py-12">
        <MainHeading>{category.name}</MainHeading>

        <ProductsGrid>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsGrid>
      </div>
    </main>
  );
}
