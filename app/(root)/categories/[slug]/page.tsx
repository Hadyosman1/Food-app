import MainHeading from "@/components/MainHeading";
import ProductCard from "@/components/products/ProductCard";
import ProductsGrid from "@/components/products/ProductsGrid";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const supabase = await createClient();

  const { error: categoryError, data: category } = await supabase
    .from("categories")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!category) {
    notFound();
  }

  const { error: productsError, data: categoryProducts } = await supabase
    .from("products")
    .select("*")
    .eq("category_id", category.id);

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

  console.log(categoryProducts);

  return (
    <main>
      <div className="container space-y-12 py-12">
        <MainHeading>{category.name}</MainHeading>

        <ProductsGrid>
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsGrid>
      </div>
    </main>
  );
}
