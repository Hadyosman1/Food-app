import MainHeading from "@/components/MainHeading";
import CartItems from "./CartItems";

export default function page() {
  return (
    <main>
      <div className="container space-y-12 py-12">
        <MainHeading>Your Cart</MainHeading>
        <CartItems />
      </div>
    </main>
  );
}
