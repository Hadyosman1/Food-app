"use client";

import CartItem from "@/components/cart/CartItem";
import { useCartStore } from "@/store/cart.store";

export default function CartItems() {
  const cart = useCartStore((state) => state.cart);

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-medium">
        ({cart.length} {cart.length > 1 ? "Items" : "Item"})
      </h2>
      <div className="columns-1 gap-4 md:columns-2">
        {cart.map((cartItem) => (
          <div key={cartItem.id} className="break-inside-avoid mb-4">
            <CartItem cartItem={cartItem} className="p-4" ImageSize={250} />
          </div>
        ))}
      </div>
    </div>
  );
}
