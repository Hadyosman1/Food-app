"use client";

import { CartItem, useCartStore } from "@/store/cart.store";
import { useEffect } from "react";

export default function CartProvider({
  children,
  cart,
}: {
  children: React.ReactNode;
  cart: CartItem[];
}) {
  const setCart = useCartStore((state) => state.setCart);

  useEffect(() => {
    setCart(cart ?? []);
  }, [cart, setCart]);

  return <>{children}</>;
}
