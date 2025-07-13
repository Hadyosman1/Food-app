"use client";

import { cn, withAuthRequired } from "@/lib/utils";
import { useWishlistStore } from "@/store/wishlist.store";
import { Product } from "@/types/globals";
import { HeartIcon, Loader2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button, ButtonProps } from "../ui/button";

interface ToggleWishlistItemProps extends ButtonProps {
  product: Product;
  isIconButton?: boolean;
}

export default function ToggleWishlistItemButton({
  product,
  isIconButton = true,
  className,
  ...props
}: ToggleWishlistItemProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleWishlistItem = useWishlistStore(
    (state) => state.toggleWishlistItem,
  );

  const isInWishlist = useWishlistStore((state) =>
    state.isInWishlist(product.id),
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleToggleWishlistItem = withAuthRequired(async () => {
    setIsLoading(true);

    try {
      await toggleWishlistItem(product.id);
    } catch (error) {
      console.error(error);
      toast.error((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  });

  if (!isMounted) return null;

  return (
    <Button
      onClick={handleToggleWishlistItem}
      disabled={isLoading}
      variant="secondary"
      size={isIconButton ? "icon" : "default"}
      className={cn(
        "absolute right-3.5 border opacity-0 transition-all duration-200 ease-in-out md:top-7 md:group-hover:top-3.5 md:group-hover:opacity-100",
        className,
      )}
      {...props}
    >
      {isLoading ? (
        <Loader2Icon className="size-4 animate-spin" />
      ) : (
        <HeartIcon
          className={cn("text-primary", {
            "fill-primary": isInWishlist,
          })}
        />
      )}
      <span className={isIconButton ? "sr-only" : ""}>
        {isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
      </span>
    </Button>
  );
}
