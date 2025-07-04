import MainHeading from "@/components/MainHeading";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tables } from "@/database.types";
import { createClient } from "@/lib/supabase/server";
import { PinIcon } from "lucide-react";
import Category from "./Category";
import Product from "./Product";

type Category = Tables<"categories">;
type Products = Omit<Tables<"products">, "gallery">[];

type Menu = { category: Category; products: Products }[];

export default async function MenuPage() {
  const supabaseClient = await createClient();
  const { error, data } = await supabaseClient
    .from("grouped_categories_with_products")
    .select("*");

  const menuItems = data as Menu;

  if (error) {
    console.error(error);
    return (
      <Alert variant="destructive" className="mx-auto max-w-md">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Failed to load menu. Please try again later.
        </AlertDescription>
      </Alert>
    );
  }

  console.log(menuItems[0]);

  return (
    <main>
      <div className="container space-y-12 py-12">
        <MainHeading className="mb-10 md:mb-16">Our Menu</MainHeading>

        <div className="drop-shadow-primary/30 bg-sidebar rounded-2xl px-5 py-8 drop-shadow">
          <div className="columns-2xs gap-6 lg:columns-3">
            {menuItems.map(({ category, products }) => (
              <div
                key={category.id}
                className="bg-card mb-6 space-y-6 overflow-hidden rounded-2xl border p-5 shadow"
              >
                <PinIcon className="text-primary fill-primary/40 absolute size-8 -translate-x-[calc(100%+5px)] -translate-y-[calc(100%+5px)] -rotate-28" />
                <Category category={category} />
                <div className="space-y-4">
                  {products.map((product) => (
                    <Product product={product} key={product.id} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
