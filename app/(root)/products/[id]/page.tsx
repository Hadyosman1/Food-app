import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const supabase = await createClient();

  // Fetch product
  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !product) {
    notFound();
  }

  // Fetch category
  let categoryName = "";
  if (product.category_id) {
    const { data: category } = await supabase
      .from("categories")
      .select("name")
      .eq("id", product.category_id)
      .single();
    categoryName = category?.name || "";
  }

  // Gallery images (if any)
  const gallery: string[] = product.gallery || [];

  // Variants (flexible structure)
  const variants = product.variants as Record<
    string,
    { name: string; extra_price: number }[]
  > | null;

  return (
    <main className="container py-12">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 md:flex-row md:items-start">
        {/* Images */}
        <div className="mx-auto w-full max-w-md flex-1">
          <div className="bg-card relative aspect-square w-full overflow-hidden rounded-xl shadow-lg">
            <Image
              src={product.main_image_url}
              alt={product.title}
              fill
              className="rounded-xl object-cover object-center"
              priority
            />
            {!product.is_available && (
              <Badge variant="destructive" className="absolute top-4 left-4">
                Out of Stock
              </Badge>
            )}
            {product.is_available && (
              <Badge className="absolute top-4 left-4">Available</Badge>
            )}
          </div>
          {gallery.length > 1 && (
            <div className="mt-4 flex justify-center gap-2">
              {gallery.map((img, i) => (
                <div
                  key={i}
                  className="border-muted relative h-20 w-20 overflow-hidden rounded-lg border"
                >
                  <Image
                    src={img}
                    alt={product.title + " image " + (i + 1)}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="flex-1 space-y-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            {categoryName && (
              <Badge variant="secondary" className="w-fit">
                {categoryName}
              </Badge>
            )}
            <div className="text-primary text-2xl font-black">
              {formatCurrency(product.base_price)}
            </div>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {product.description}
          </p>

          {/* Variants Section (Beautiful Modern UI, Dark Theme) */}
          {variants &&
            typeof variants === "object" &&
            Object.keys(variants).length > 0 && (
              <div className="space-y-6">
                {Object.entries(variants).map(([group, items]) => (
                  <div key={group} className="">
                    <h2 className="text-foreground/90 mb-3 text-lg font-semibold capitalize">
                      {group}
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {items.map((item, i) => (
                        <div
                          key={i}
                          className={
                            `flex items-center rounded-full border px-4 py-2 shadow-sm transition-colors ` +
                            (item.extra_price === 0
                              ? "bg-primary/10 border-primary text-primary font-semibold"
                              : "bg-muted border-muted text-foreground/90 border")
                          }
                        >
                          <span className="mr-2 text-base">{item.name}</span>
                          {item.extra_price > 0 ? (
                            <span className="text-primary bg-background border-primary/30 rounded-full border px-2 py-0.5 text-xs font-medium">
                              +{formatCurrency(item.extra_price)}
                            </span>
                          ) : (
                            <span className="text-primary bg-primary/20 rounded-full px-2 py-0.5 text-xs font-medium">
                              Included
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

          <div className="mt-6 flex gap-4">
            <Button
              size="lg"
              className="rounded-3xl"
              disabled={!product.is_available}
            >
              Add to Cart
            </Button>
            <Button size="lg" variant="outline" className="rounded-3xl">
              Add to Wishlist
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
