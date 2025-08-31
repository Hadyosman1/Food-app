"use client";

import ProductQuantity from "@/components/products/ProductQuantity";
import ProductVariants from "@/components/products/ProductsVariants";
import ToggleWishlistItemButton from "@/components/wishlist/ToggleWishlistItemButton";
import { Tables } from "@/database.types";
import {
  formatCurrency,
  getInitialSelectedVariants,
  getProductTotalPrice,
  withAuthRequired,
} from "@/lib/utils";
import { useCartStore } from "@/store/cart.store";
import { Product as ProductType } from "@/types/globals";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { useState } from "react";
import { toast } from "sonner";
import CategoryLink from "./CategoryLink";
import ProductImages from "./ProductImages";
import AddToCartButton from "@/components/products/AddToCartButton";

interface ProductProps {
  product: ProductType;
  categoryPromise: Promise<PostgrestSingleResponse<Tables<"categories">>>;
}

export default function Product({ product, categoryPromise }: ProductProps) {
  const [selectedVariants, setSelectedVariants] = useState<
    ProductType["variants"]
  >(() => getInitialSelectedVariants(product.variants));

  const [quantity, setQuantity] = useState(1);

  const [isPending, setIsPending] = useState(false);

  const addItemToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = withAuthRequired(async () => {
    setIsPending(true);
    try {
      await addItemToCart(product, selectedVariants, quantity);
      toast.success("Product added to the cart successfully!");
      setQuantity(1);
    } catch (error) {
      console.error(error);
      toast.error((error as Error).message);
    } finally {
      setIsPending(false);
    }
  });

  return (
    <div className="grid grid-cols-8 gap-8">
      <div className="col-span-8 md:col-span-3 lg:col-span-4">
        <ProductImages
          images={[product.main_image_url, ...(product.gallery ?? [])]}
          alt={product.title}
        />
      </div>
      <div className="col-span-8 space-y-6 md:col-span-5 lg:col-span-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <CategoryLink categoryPromise={categoryPromise} />
          <p className="text-muted-foreground max-w-[550px] text-lg leading-relaxed text-balance">
            {product.description}
          </p>
          <div className="text-primary text-2xl font-black">
            {formatCurrency(
              getProductTotalPrice(
                product.base_price,
                selectedVariants,
                quantity,
              ),
            )}
          </div>
        </div>

        <ProductVariants
          selectedVariants={selectedVariants}
          setSelectedVariants={setSelectedVariants}
          product={product}
        />

        <div className="bg-sidebar max-w-[300px] rounded-2xl border p-3">
          <ProductQuantity quantity={quantity} setQuantity={setQuantity} />
        </div>

        <div className="mt-6 flex gap-3">
          <AddToCartButton
            size="lg"
            className="max-w-[300px] rounded-3xl"
            handleAddToCart={handleAddToCart}
            isPending={isPending}
          />
          <ToggleWishlistItemButton
            product={product}
            isIconButton={false}
            size="lg"
            className="static rounded-3xl opacity-100"
          />
        </div>
      </div>
    </div>
  );
}
