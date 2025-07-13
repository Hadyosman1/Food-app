import MainHeading from "@/components/MainHeading";
import ProductCard from "@/components/products/ProductCard";
import ProductsCarousel from "@/components/products/ProductsCarousel";
import ProductsGrid from "@/components/products/ProductsGrid";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tables } from "@/database.types";
import { createClient } from "@/lib/supabase/server";
import { Product } from "@/types/globals";
import { PostgrestSingleResponse } from "@supabase/supabase-js";

interface RelatedProductsProps {
  categoryPromise: Promise<PostgrestSingleResponse<Tables<"categories">>>;
}

export default async function RelatedProducts({
  categoryPromise,
}: RelatedProductsProps) {
  const { data: category, error } = await categoryPromise;

  if (error) return null;

  const supabase = await createClient();

  const { data: relatedProducts, error: productsError } = await supabase
    .from("products")
    .select("*")
    .eq("category_id", category.id)
    .limit(10);

  if (productsError) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{productsError.message}</AlertDescription>
      </Alert>
    );
  }

  const products = relatedProducts as Product[];

  if (products.length === 0) return null;

  return (
    <div className="py-10">
      <MainHeading el="h2">Related</MainHeading>
      {products.length > 4 ? (
        <ProductsCarousel products={products} badge="Related" />
      ) : (
        <ProductsGrid>
          {products.map((product) => (
            <ProductCard product={product} key={product.id} badge="Related" />
          ))}
        </ProductsGrid>
      )}
    </div>
  );
}
