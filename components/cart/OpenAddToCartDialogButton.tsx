"use client";

import { getInitialSelectedVariants, withAuthRequired } from "@/lib/utils";
import { useCartStore } from "@/store/cart.store";
import { Product } from "@/types/globals";
import { ShoppingCartIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import AddToCartButton from "../products/AddToCartButton";
import { Button } from "../ui/button";
import CartItemDialog from "./CartItemDialog";

interface OpenAddToCartDialogButtonProps {
  product: Product;
}

export default function OpenAddToCartDialogButton({
  product,
}: OpenAddToCartDialogButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVariants, setSelectedVariants] = useState<Product["variants"]>(
    () => getInitialSelectedVariants(product.variants),
  );
  const [quantity, setQuantity] = useState(1);
  const [isPending, setIsPending] = useState(false);

  const addItemToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = withAuthRequired(async () => {
    setIsPending(true);
    try {
      await addItemToCart(product, selectedVariants, quantity);
      toast.success("Product added to the cart successfully!");
      setIsOpen(false);
    } catch (error) {
      console.error(error);
      toast.error((error as Error).message);
    } finally {
      setIsPending(false);
    }
  });

  return (
    <>
      <Button onClick={() => setIsOpen(true)} className="grow gap-1">
        Add to cart <ShoppingCartIcon />
      </Button>
      {isOpen && (
        <CartItemDialog
          setIsOpen={setIsOpen}
          product={product}
          selectedVariants={selectedVariants}
          setSelectedVariants={setSelectedVariants}
          quantity={quantity}
          setQuantity={setQuantity}
          actionButton={
            <AddToCartButton
              handleAddToCart={handleAddToCart}
              isPending={isPending}
            />
          }
        />
      )}
    </>
  );
}
