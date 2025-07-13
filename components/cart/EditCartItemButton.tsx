"use client";

import { CartItem, useCartStore } from "@/store/cart.store";
import { EllipsisVerticalIcon, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import CartItemDialog from "./CartItemDialog";

interface EditCartItemButtonProps {
  cartItem: CartItem;
}

export default function EditCartItemButton({
  cartItem,
}: EditCartItemButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVariants, setSelectedVariants] = useState(
    cartItem.selected_variants,
  );
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const [isPending, setIsPending] = useState(false);

  const editCartItem = useCartStore((state) => state.editCartItem);

  const handleEditCartItem = async () => {
    setIsPending(true);
    try {
      await editCartItem(cartItem.id, selectedVariants, quantity);
      setIsOpen(false);
      toast.success("Cart item updated successfully");
    } catch (error) {
      console.error(error);
      toast.error((error as Error).message);
    } finally {
      setIsPending(false);
    }
  };

  useEffect(() => {
    setSelectedVariants(cartItem.selected_variants);
    setQuantity(cartItem.quantity);
  }, [cartItem.id, isOpen, cartItem.quantity, cartItem.selected_variants]);

  return (
    <>
      <Button onClick={() => setIsOpen(true)} variant="outline" size="icon">
        <EllipsisVerticalIcon />
        <span className="sr-only">Edit cart item</span>
      </Button>

      {isOpen && (
        <CartItemDialog
          product={cartItem.product}
          setIsOpen={setIsOpen}
          quantity={quantity}
          setQuantity={setQuantity}
          selectedVariants={selectedVariants}
          setSelectedVariants={setSelectedVariants}
          actionButton={
            <Button
              className="grow"
              onClick={handleEditCartItem}
              disabled={isPending}
            >
              Edit
              {isPending && <Loader2 className="animate-spin" />}
            </Button>
          }
        />
      )}
    </>
  );
}
