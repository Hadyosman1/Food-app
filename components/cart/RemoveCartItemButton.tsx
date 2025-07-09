"use client";

import { useCartStore } from "@/store/cart.store";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button, ButtonProps } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

interface RemoveCartItemButtonProps extends ButtonProps {
  cartItemId: string;
  children: React.ReactNode;
}

export default function RemoveCartItemButton({
  cartItemId,
  children,
  ...props
}: RemoveCartItemButtonProps) {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const [isPending, setIsPending] = useState(false);

  const handleRemoveFromCart = async () => {
    try {
      setIsPending(true);
      await removeFromCart(cartItemId);
    } catch (error) {
      console.error(error);
      toast.error((error as Error).message);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button {...props}>{children}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Remove from cart</DialogTitle>
          <DialogDescription>
            Are you sure you want to remove this item from your cart?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button
            variant="destructive"
            onClick={handleRemoveFromCart}
            disabled={isPending}
          >
            Remove {isPending && <Loader2 className="size-4 animate-spin" />}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
