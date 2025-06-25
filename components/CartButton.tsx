import { ShoppingBagIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function CartButton() {
  return (
    <Button variant="ghost" size="icon" className="text-primary relative">
      <ShoppingBagIcon className="size-6" />
      <span className="sr-only">Your cart</span>
      <span className="text-primary-foreground bg-primary absolute -top-2.5 -right-2 flex size-6 items-center justify-center rounded-full tabular-nums">
        0
      </span>
    </Button>
  );
}
