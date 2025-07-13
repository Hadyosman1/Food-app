import {
  cn,
  formatCurrency,
  getProductTotalPrice,
  getSelectedVariantsPrice,
} from "@/lib/utils";
import { type CartItem as CartItemType } from "@/store/cart.store";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import EditCartItemButton from "@/components/cart/EditCartItemButton";
import RemoveCartItemButton from "@/components/cart/RemoveCartItemButton";
import { Badge } from "@/components/ui/badge";

interface CartItemProps {
  cartItem: CartItemType;
  className?: string;
}

export default function CartItem({ cartItem, className }: CartItemProps) {
  return (
    <div
      className={cn(
        "bg-accent relative flex flex-col gap-3 rounded-2xl border p-3 shadow",
        className,
      )}
    >
      <div className="top-3 right-3 flex w-full justify-end gap-1 sm:absolute sm:w-fit">
        <EditCartItemButton cartItem={cartItem} />
        <RemoveCartItemButton
          variant="outline"
          size="icon"
          cartItemId={cartItem.id}
        >
          <Trash2 />
          <span className="sr-only">Delete from cart</span>
        </RemoveCartItemButton>
      </div>
      <div className="shrink-1 grow">
        <Image
          src={cartItem.product.main_image_url}
          alt={cartItem.product.title}
          width={250}
          height={250}
          className="mx-auto rounded-2xl shadow"
        />
      </div>
      <div className="flex shrink-2 grow-[10] gap-2 max-md:flex-wrap-reverse">
        <div className={"grow space-y-1 text-lg font-medium"}>
          <h2 className={"text-accent-foreground"}>{cartItem.product.title}</h2>
          <p className="text-muted-foreground">
            {cartItem.product.description}
          </p>
          <p>Quantity: {cartItem.quantity}</p>
          <strong className={cn("text-primary text-base font-semibold")}>
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
          {cartItem.selected_variants &&
            cartItem.selected_variants?.length > 0 && (
              <div className="bg-background mt-2 flex flex-wrap gap-2 rounded-2xl border p-3">
                <h3 className="w-full">Selected variants</h3>
                {cartItem.selected_variants?.map((variant) => (
                  <div
                    className="bg-accent space-y-2 rounded-2xl border p-2.5 font-normal"
                    key={variant.name}
                  >
                    <p className="text-primary text-sm capitalize">
                      {variant.name}
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {variant.options.map((option) => (
                        <li key={option.name}>
                          <Badge className="flex-col gap-1 p-2">
                            {option.name}{" "}
                            <span className="bg-secondary text-primary rounded-full p-1">
                              {formatCurrency(option.extra_price)}
                            </span>
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
