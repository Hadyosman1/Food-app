"use client";

import { useWishlistStore, WishlistItem } from "@/store/wishlist.store";
import { useEffect } from "react";

export default function WishlistProvider({
  children,
  wishlist,
}: {
  children: React.ReactNode;
  wishlist: WishlistItem[];
}) {
  const setWishlist = useWishlistStore((state) => state.setWishlist);

  useEffect(() => {
    setWishlist(wishlist??[]);
  }, [wishlist, setWishlist]);

  return <>{children}</>;
}
