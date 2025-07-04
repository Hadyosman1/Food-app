"use client";

import Header from "@/components/header/Header";
import useUser from "@/hooks/useUser";
import { createClient } from "@/lib/supabase/client";
import { getWishlist } from "@/services/wishlist";
import { useWishlistStore } from "@/store/wishlist.store";
import { useEffect } from "react";
import { toast } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useUser();
  const supabase = createClient();
  const setWishlist = useWishlistStore((state) => state.setWishlist);

  useEffect(() => {
    const fetchWishlist = async () => {
      const { data: wishlist, error } = await getWishlist(
        supabase,
        user?.id ?? "",
      );

      if (error) {
        console.error(error);
        toast.error("Failed to fetch wishlist");
      }

      if (wishlist) {
        setWishlist(wishlist);
      }
    };
    fetchWishlist();
  }, [setWishlist, supabase, user?.id]);

  return (
    <>
      <Header />
      <div className="mt-(--header-height)">{children}</div>
    </>
  );
}
