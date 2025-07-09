"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { formatCurrency, getProductTotalPrice } from "@/lib/utils";
import { Product } from "@/types/globals";
import { InfoIcon, MinusIcon, PlusIcon } from "lucide-react";
import Image from "next/image";
import { SetStateAction } from "react";
import ProductVariants from "../products/ProductsVariants";
import { Button } from "../ui/button";

const MAX_QUANTITY_PER_ITEM = 8;

interface CartItemDialogProps {
  product: Product;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  actionButton: React.ReactNode;
  selectedVariants: Product["variants"];
  setSelectedVariants: React.Dispatch<SetStateAction<Product["variants"]>>;
  quantity: number;
  setQuantity: React.Dispatch<SetStateAction<number>>;
}

export default function CartItemDialog({
  product,
  setIsOpen,
  actionButton,
  selectedVariants,
  setSelectedVariants,
  quantity,
  setQuantity,
}: CartItemDialogProps) {
  return (
    <Dialog open onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add item to your cart</DialogTitle>
          <DialogDescription>
            Validate the item before adding it to the cart.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3 overflow-y-auto">
          <div className="space-y-3 text-center">
            <h2 className="text-primary font-bold">{product.title}</h2>
            <Image
              alt={product.title}
              src={product.main_image_url}
              width={300}
              height={300}
              className="mx-auto aspect-square rounded-2xl object-cover drop-shadow-md select-none"
            />
          </div>
          <p className="text-muted-foreground text-sm">{product.description}</p>

          {product.variants && (
            <ProductVariants
              selectedVariants={selectedVariants}
              setSelectedVariants={setSelectedVariants}
              product={product}
            />
          )}

          <div className="flex flex-col gap-2 py-2">
            <div className="flex items-center justify-between">
              <strong>Quantity:</strong>
              <div className="flex items-center gap-2">
                <Button
                  variant="secondary"
                  size="icon"
                  disabled={quantity === 1}
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                >
                  <MinusIcon />
                </Button>
                <span className="text-primary tabular-nums">{quantity}</span>
                <Button
                  variant="secondary"
                  size="icon"
                  disabled={quantity === MAX_QUANTITY_PER_ITEM}
                  onClick={() =>
                    setQuantity((prev) =>
                      Math.min(MAX_QUANTITY_PER_ITEM, prev + 1),
                    )
                  }
                >
                  <PlusIcon />
                </Button>
              </div>
            </div>
            {quantity === MAX_QUANTITY_PER_ITEM && (
              <div className="text-muted-foreground bg-sidebar/40 flex items-center justify-center gap-1 rounded-2xl border p-2 text-sm">
                <InfoIcon className="text-destructive" />
                <p>You can only add {MAX_QUANTITY_PER_ITEM} at a time.</p>
              </div>
            )}
          </div>

          <strong>
            Price:{" "}
            <span className="text-primary">
              {formatCurrency(
                getProductTotalPrice(
                  product.base_price,
                  selectedVariants,
                  quantity,
                ),
              )}
            </span>
          </strong>
        </div>
        <DialogFooter className="flex-row flex-wrap">
          {actionButton}
          <DialogClose asChild>
            <Button variant="secondary">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
