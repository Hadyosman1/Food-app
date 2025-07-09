import Header from "@/components/header/Header";
import CartProvider from "@/components/providers/CartProvider";
import WishlistProvider from "@/components/providers/WishlistProvider";
import { createClient } from "@/lib/supabase/server";
import { getCart } from "@/services/cart";
import { getWishlist } from "@/services/wishlist";
import { CartItem } from "@/store/cart.store";
import { WishlistItem } from "@/store/wishlist.store";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const [{ data: cart }, { data: wishlist }] = await Promise.all([
    getCart(supabase, user?.id ?? "").catch(() => ({ data: [] })),
    getWishlist(supabase, user?.id ?? "").catch(() => ({ data: [] })),
  ]);

  return (
    <CartProvider cart={cart as CartItem[]}>
      <WishlistProvider wishlist={wishlist as WishlistItem[]}>
        <Header />
        <div className="mt-(--header-height)">{children}</div>
      </WishlistProvider>
    </CartProvider>
  );
}
