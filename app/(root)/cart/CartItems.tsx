"use client";

import CartItem from "./CartItem";
import { useCartStore } from "@/store/cart.store";

export default function CartItems() {
  const cart = useCartStore((state) => state.cart);

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
