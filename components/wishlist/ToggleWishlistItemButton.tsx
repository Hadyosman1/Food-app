"use client";

import { cn, withAuthRequired } from "@/lib/utils";
import { useWishlistStore } from "@/store/wishlist.store";
import { Product } from "@/types/globals";
import { HeartIcon } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../ui/button";

interface ToggleWishlistItemProps {
  product: Product;
}

export default function ToggleWishlistItemButton({
  product,
}: ToggleWishlistItemProps) {
  const toggleWishlistItem = useWishlistStore(
    (state) => state.toggleWishlistItem,
  );

  const isInWishlist = useWishlistStore((state) =>
    state.isInWishlist(product.id),
  );

  const handleToggleWishlistItem = withAuthRequired(async () => {
    try {
      await toggleWishlistItem(product.id);
    } catch (error) {
      console.error(error);
      toast.error((error as Error).message);
    }
  });

  return (
    <Button
      onClick={handleToggleWishlistItem}
      variant="secondary"
      size="icon"
      className="absolute right-3.5 opacity-0 transition-all duration-200 ease-in-out md:top-7 md:group-hover:top-3.5 md:group-hover:opacity-100"
    >
      <HeartIcon
        className={cn(
          "transition-all duration-200 ease-in-out",
          isInWishlist && "fill-primary text-primary",
        )}
      />
      <span className="sr-only">Add to wishlist</span>
    </Button>
  );
}
