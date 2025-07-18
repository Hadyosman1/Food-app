import { Tables } from "@/database.types";
import { createClient } from "@/lib/supabase/server";
import { getProductsByCollectionId } from "@/services/products";
import { Product } from "@/types/globals";
import { InfoIcon } from "lucide-react";
import MainHeading from "../MainHeading";
import ProductCard from "../products/ProductCard";
import ProductsCarousel from "../products/ProductsCarousel";
import ProductsGrid from "../products/ProductsGrid";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

interface CollectionProps {
  collection: Tables<"collections">;
}

export default async function Collection({ collection }: CollectionProps) {
  const supabaseClient = await createClient();
  const { data, error } = await getProductsByCollectionId(
    supabaseClient,
    collection.id,
  );

  if (error) {
    console.error(error);
    return (
      <Alert variant="destructive" className="mt-6">
        <InfoIcon />
        <AlertTitle>Error while fetching products</AlertTitle>
        <AlertDescription>{error?.message}</AlertDescription>
      </Alert>
    );
  }

  const products = data
    .map((obj) => obj.products)
    .filter(Boolean) as unknown as Product[];

  if (products.length === 0) return null;

  return (
    <section className="py-12">
      <MainHeading el="h2">{collection.name}</MainHeading>

      {products.length > 4 ? (
        <ProductsCarousel products={products} badge={collection.name} />
      ) : (
        <ProductsGrid>
          {products.map((product) => (
            <ProductCard
              badge={collection.name}
              key={product.id}
              product={product}
            />
          ))}
        </ProductsGrid>
      )}
    </section>
  );
}
