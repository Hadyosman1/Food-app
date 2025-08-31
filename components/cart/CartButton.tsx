import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { formatCurrency, getProductTotalPrice } from "@/lib/utils";
import { useCartStore } from "@/store/cart.store";
import { CreditCardIcon, Link2Icon, ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import SidebarCartItem from "./SidebarCartItem";

export default function CartButton() {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useCartStore((state) => state.cart);
  const cartItemsLength = cartItems.length;

  const getCartTotalPrice = () => {
    return cartItems.reduce(
      (acc, cartItem) =>
        acc +
        getProductTotalPrice(
          cartItem.product.base_price,
          cartItem.selected_variants,
          cartItem.quantity,
        ),
      0,
    );
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-primary relative">
          <ShoppingBagIcon className="size-6" />
          <span className="sr-only">Your cart</span>
          <span className="text-primary-foreground bg-primary absolute -top-1.5 -right-1 flex size-5 items-center justify-center rounded-full text-xs tabular-nums">
            {cartItemsLength}
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-[450px]">
        <SheetHeader>
          <SheetTitle>
            Your cart{" "}
            <span className="text-primary">
              ( {cartItemsLength} {cartItemsLength > 1 ? "Items" : "Item"} )
            </span>
          </SheetTitle>
          <SheetDescription className="flex items-center gap-2">
            This is your cart items
            <Button
              onClick={() => setIsOpen(false)}
              size="sm"
              className="ms-auto"
              asChild
            >
              <Link href="/cart">
                View Cart <Link2Icon />
              </Link>
            </Button>
          </SheetDescription>
        </SheetHeader>
        <div className="grow space-y-3 overflow-y-auto px-4 py-4">
          {cartItemsLength > 0 ? (
            cartItems.map((cartItem) => (
              <SidebarCartItem key={cartItem.id} cartItem={cartItem} />
            ))
          ) : (
            <div className="bg-primary/10 mx-auto flex aspect-square w-fit flex-col items-center justify-center rounded-full p-5 text-sm">
              <ShoppingBagIcon className="text-primary mb-4 h-12 w-12" />
              <p className="text-primary text-center">Your cart is empty.</p>
              <p>Go and pick some items to your cart.</p>
              <Button
                onClick={() => setIsOpen(false)}
                size="sm"
                className="mt-2 rounded-3xl"
                asChild
              >
                <Link href="/menu">Go to menu</Link>
              </Button>
            </div>
          )}
        </div>
        {cartItemsLength > 0 && (
          <SheetFooter className="bg-sidebar border-t">
            {cartItems.length > 0 && (
              <strong className="pb-2">
                Total Price:{" "}
                <span className="text-primary">
                  {formatCurrency(getCartTotalPrice())}
                </span>
              </strong>
            )}
            <Button>
              <CreditCardIcon />
              Checkout
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
