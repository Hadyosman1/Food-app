import { ShoppingBagIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function CartButton() {
  return (
    <Button variant="ghost" size="icon" className="text-primary relative">
      <ShoppingBagIcon className="size-6" />
      <span className="sr-only">Your cart</span>
      <span className="text-primary-foreground bg-primary absolute -top-1.5 -right-1 flex size-5 items-center justify-center rounded-full text-xs tabular-nums">
        0
      </span>
    </Button>
  );
}
