import MainHeading from "@/components/MainHeading";
import WishlistItems from "./WishlistItems";

export default function Wishlist() {
  return (
    <main>
      <div className="container space-y-12 py-12">
        <MainHeading>Your wishlist</MainHeading>
        <WishlistItems />
      </div>
    </main>
  );
}
