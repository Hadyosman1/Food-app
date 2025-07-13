"use client";

import { cn } from "@/lib/utils";
import { Loader2Icon, ShoppingCartIcon } from "lucide-react";
import { Button, ButtonProps } from "../ui/button";

interface AddToCartButtonProps extends ButtonProps {
  handleAddToCart: () => void;
  isPending: boolean;
}

export default function AddToCartButton({
  handleAddToCart,
  isPending,
  className,
  ...props
}: AddToCartButtonProps) {
  return (
    <Button
      className={cn("grow", className)}
      onClick={handleAddToCart}
      disabled={isPending}
      {...props}
    >
      Add to cart
      {isPending ? (
        <Loader2Icon className="animate-spin" />
      ) : (
        <ShoppingCartIcon />
      )}
    </Button>
  );
}
