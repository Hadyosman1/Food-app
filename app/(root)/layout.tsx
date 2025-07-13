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

  let cart: CartItem[] = [];
  let wishlist: WishlistItem[] = [];

  if (user) {
    const [{ data: cartData }, { data: wishlistData }] = await Promise.all([
      getCart(supabase, user.id).catch(() => ({ data: [] })),
      getWishlist(supabase, user.id).catch(() => ({ data: [] })),
    ]);

    cart = cartData as CartItem[];
    wishlist = wishlistData as WishlistItem[];
  }

  return (
    <CartProvider cart={cart}>
      <WishlistProvider wishlist={wishlist}>
        <Header />
        <div className="mt-(--header-height)">{children}</div>
      </WishlistProvider>
    </CartProvider>
  );
}
