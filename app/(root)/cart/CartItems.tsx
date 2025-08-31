"use client";

import { ShoppingBagIcon } from "lucide-react";
import CartItem from "./CartItem";
import { useCartStore } from "@/store/cart.store";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CartItems() {
  const cart = useCartStore((state) => state.cart);

  if (cart.length === 0) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center px-4 text-center">
        <div className="bg-primary/10 mb-6 flex h-24 w-24 items-center justify-center rounded-full">
          <ShoppingBagIcon className="text-primary h-12 w-12" />
        </div>
        <h3 className="text-foreground mb-2 text-2xl font-bold">
          Your cart is empty
        </h3>
        <p className="text-muted-foreground mb-6 max-w-md">
          Start building your cart by browsing our menu and adding items you
          love.
        </p>
        <Button asChild size="lg" className="rounded-3xl px-8">
          <Link href="/menu">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-medium">
        ({cart.length} {cart.length > 1 ? "Items" : "Item"})
      </h2>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {cart.map((cartItem) => (
          <div key={cartItem.id} className="mb-4 break-inside-avoid">
            <CartItem cartItem={cartItem} className="p-4" />
          </div>
        ))}
      </div>
    </div>
  );
}
