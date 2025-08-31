"use client";

import ProductsGrid from "@/components/products/ProductsGrid";
import { Button } from "@/components/ui/button";
import { useWishlistStore } from "@/store/wishlist.store";
import { Heart, ShoppingBag } from "lucide-react";
import WishlistItem from "./WishlistItem";

export default function WishlistItems() {
  const wishlist = useWishlistStore((state) => state.wishlist);

  if (wishlist.length === 0) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center px-4 text-center">
        <div className="bg-primary/10 mb-6 flex h-24 w-24 items-center justify-center rounded-full">
          <Heart className="text-primary h-12 w-12" />
        </div>
        <h3 className="text-foreground mb-2 text-2xl font-bold">
          Your wishlist is empty
        </h3>
        <p className="text-muted-foreground mb-6 max-w-md">
          Start building your wishlist by browsing our menu and adding items you
          love.
        </p>
        <Button asChild size="lg" className="rounded-3xl px-8">
          <a href="/menu">
            <ShoppingBag className="h-5 w-5" />
            Start Shopping
          </a>
        </Button>
      </div>
    );
  }

  return (
    <div className="">
      <h2 className="-mb-6 text-lg font-medium">
        ({wishlist.length} {wishlist.length > 1 ? "Items" : "Item"})
      </h2>
      <ProductsGrid>
        {wishlist.map((item) => (
          <WishlistItem key={item.product_id} itemId={item.product_id} />
        ))}
      </ProductsGrid>
    </div>
  );
}
