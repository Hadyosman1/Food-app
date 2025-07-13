import {
  cn,
  formatCurrency,
  getProductTotalPrice,
  getSelectedVariantsPrice,
} from "@/lib/utils";
import { type CartItem as CartItemType } from "@/store/cart.store";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import EditCartItemButton from "./EditCartItemButton";
import RemoveCartItemButton from "./RemoveCartItemButton";

interface SidebarCartItemProps {
  cartItem: CartItemType;
  className?: string;
}

export default function SidebarCartItem({
  cartItem,
  className,
}: SidebarCartItemProps) {
  return (
    <div
      className={cn(
        "bg-accent hover:border-primary hover:bg-primary/20 flex gap-3 rounded-2xl border p-3 shadow transition-colors duration-300 max-sm:flex-col",
        className,
      )}
    >
      <div className="mx-auto shrink-1 grow max-sm:w-[120px]">
        <Image
          src={cartItem.product.main_image_url}
          alt={cartItem.product.title}
          width={120}
          height={120}
          className="w-full rounded-2xl shadow"
        />
      </div>
      <div className="flex shrink-2 grow-[10] gap-2">
        <div className={cn("grow space-y-0.5 text-sm font-medium")}>
          <h2 className={cn("text-accent-foreground")}>
            {cartItem.product.title}
          </h2>
          <p>Quantity: {cartItem.quantity}</p>
          <strong className={cn("text-primary text-xs font-semibold")}>
            {cartItem.quantity > 1 && (
              <>
                {cartItem.product.base_price +
                  getSelectedVariantsPrice(cartItem.selected_variants)}
                {" x "} {cartItem.quantity} {" = "}
              </>
            )}
            {formatCurrency(
              getProductTotalPrice(
                cartItem.product.base_price,
                cartItem.selected_variants,
                cartItem.quantity,
              ),
            )}
          </strong>
        </div>
      </div>
      <div className="ms-auto flex gap-1 max-sm:order-[-1]">
        <RemoveCartItemButton
          variant="outline"
          size="icon"
          cartItemId={cartItem.id}
        >
          <Trash2 />
          <span className="sr-only">Delete from cart</span>
        </RemoveCartItemButton>
        <EditCartItemButton cartItem={cartItem} />
      </div>
    </div>
  );
}
