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
import { Badge } from "../ui/badge";

interface CartItemProps {
  cartItem: CartItemType;
  ImageSize?: number;
  className?: string;
  insideSideBar?: boolean;
}

// TODO: Remove the (conditional classes, insideSideBar Prop, ImageSize Prop) and make component for the cart page and keep this for the side bar
export default function CartItem({
  cartItem,
  className,
  ImageSize = 80,
  insideSideBar = false,
}: CartItemProps) {
  return (
    <div
      className={cn(
        "bg-accent group hover:bg-primary/20 flex flex-wrap gap-3 rounded-2xl border p-3 shadow transition-colors duration-300",
        className,
      )}
    >
      <div className="shrink-1 grow">
        <Image
          src={cartItem.product.main_image_url}
          alt={cartItem.product.title}
          width={ImageSize}
          height={ImageSize}
          className="mx-auto rounded-2xl shadow"
        />
      </div>
      <div className="flex shrink-2 grow-[10] gap-2 max-md:flex-wrap-reverse">
        <div
          className={cn("grow space-y-2 text-lg font-medium", {
            "space-y-0.5 text-sm": insideSideBar,
          })}
        >
          <h2
            className={cn("text-accent-foreground", {
              "line-clamp-1": insideSideBar,
            })}
          >
            {cartItem.product.title}
          </h2>
          {!insideSideBar && (
            <p className="text-muted-foreground">
              {cartItem.product.description}
            </p>
          )}
          <p>Quantity: {cartItem.quantity}</p>
          <strong
            className={cn("text-primary text-base font-semibold", {
              "text-xs": insideSideBar,
            })}
          >
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
          {!insideSideBar &&
            cartItem.selected_variants &&
            cartItem.selected_variants?.length > 0 && (
              <div className="bg-background mt-2 space-y-2 rounded-2xl border p-3">
                <h3>Selected variants</h3>
                {cartItem.selected_variants?.map((variant) => (
                  <div
                    className="bg-accent rounded-2xl border p-2.5 font-normal"
                    key={variant.name}
                  >
                    <p className="text-primary capitalize">{variant.name}</p>
                    <ul>
                      {variant.options.map((option) => (
                        <li key={option.name}>
                          <Badge className="gap-1 rounded-full p-2">
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
        <div className="ms-auto flex gap-1">
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
      </div>
    </div>
  );
}
