import ProductCardSkeleton from "@/components/products/ProductCardSkeleton";
import ProductsGrid from "@/components/products/ProductsGrid";
import { Skeleton } from "@/components/ui/skeleton";
import { createClient } from "@/lib/supabase/server";
import { getCategoryById } from "@/services/categories";
import { getProductById } from "@/services/products";
import { Product as ProductType } from "@/types/globals";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Product from "./Product";
import RelatedProducts from "./RelatedProducts";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const supabase = await createClient();

  const { data, error } = await getProductById(supabase, id);

  if (error || !data) {
    notFound();
  }

  const product = data as ProductType;

  const categoryPromise = getCategoryById(supabase, product.category_id);

  return (
    <main>
      <div className="container space-y-12 py-12">
        <Product product={product} categoryPromise={categoryPromise} />
        <Suspense
          fallback={
            <div className="py-12">
              <Skeleton className="mx-auto h-26 w-full max-w-80 rounded-2xl" />

              <ProductsGrid>
                {Array.from({ length: 4 }, (_, i) => (
                  <ProductCardSkeleton key={i} />
                ))}
              </ProductsGrid>
            </div>
          }
        >
          <RelatedProducts categoryPromise={categoryPromise} />
        </Suspense>
      </div>
    </main>
  );
}
