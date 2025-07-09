import { createClient } from "@/lib/supabase/client";
import { addToWishlist, removeFromWishlist } from "@/services/wishlist";
import { create } from "zustand";

export interface WishlistItem {
  product_id: string;
}

export const useWishlistStore = create<{
  wishlist: WishlistItem[];
  setWishlist: (wishlist: WishlistItem[]) => void;
  toggleWishlistItem: (product_id: string) => Promise<void>;
  clearWishlist: () => void;
  isInWishlist: (product_id: string) => boolean;
}>((set, get) => ({
  wishlist: [],
  setWishlist(wishlist) {
    set({ wishlist });
  },
  clearWishlist() {
    set({ wishlist: [] });
  },
  async toggleWishlistItem(product_id) {
    const isInWishlist = get().wishlist.some(
      (item) => item.product_id === product_id,
    );

    const supabase = createClient();
    const userId = (await supabase.auth.getUser()).data.user?.id;

    if (!userId) {
      throw new Error("User not found");
    }

    const previousWishlist = get().wishlist;

    if (isInWishlist) {
      set({
        wishlist: previousWishlist.filter(
          (item) => item.product_id !== product_id,
        ),
      });

      const { error } = await removeFromWishlist(supabase, userId, product_id);

      if (error) {
        set({ wishlist: previousWishlist });
        throw new Error(error.message);
      }
    } else {
      set({ wishlist: [...previousWishlist, { product_id }] });

      const { error } = await addToWishlist(supabase, userId, product_id);

      if (error) {
        set({ wishlist: previousWishlist });
        throw new Error(error.message);
      }
    }
  },
  isInWishlist(product_id) {
    return get().wishlist.some((item) => item.product_id === product_id);
  },
}));
