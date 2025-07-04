import { HeartIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useWishlistStore } from "@/store/wishlist.store";

export default function WishlistButton() {
  const { wishlist } = useWishlistStore();

  return (
    <Button
      asChild
      variant="ghost"
      size="icon"
      className="text-primary relative"
    >
      <Link href="/wishlist">
        <HeartIcon className="size-6" />
        <span className="sr-only">Your wishlist</span>
        <span className="text-primary-foreground bg-primary absolute -top-1.5 -right-1 flex size-5 items-center justify-center rounded-full text-xs tabular-nums">
          {wishlist.length}
        </span>
      </Link>
    </Button>
  );
}
