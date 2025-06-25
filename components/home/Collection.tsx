import { Tables } from "@/database.types";
import { createClient } from "@/lib/supabase/server";
import { getProductsByCollectionId } from "@/services/products";
import { InfoIcon } from "lucide-react";
import MainHeading from "../MainHeading";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import ProductCard from "../products/ProductCard";
import ProductsCarousel from "../products/ProductsCarousel";
import ProductsGrid from "../products/ProductsGrid";

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
    .filter(Boolean) as unknown as Tables<"products">[];

  if (products.length === 0) return null;

  return (
    <section className="py-12">
      <MainHeading>{collection.name}</MainHeading>

      {products.length > 4 ? (
        <ProductsCarousel products={products} />
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

      {/* <pre className="mt-33">{JSON.stringify(products, null, 2)}</pre> */}
    </section>
  );
}
