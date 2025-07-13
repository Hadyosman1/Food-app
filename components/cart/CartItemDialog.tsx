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
import Image from "next/image";
import { SetStateAction } from "react";
import ProductQuantity from "../products/ProductQuantity";
import ProductVariants from "../products/ProductsVariants";
import { Button } from "../ui/button";

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
      <DialogContent className="max-sm:px-3 sm:max-w-[500px]">
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
            <ProductQuantity quantity={quantity} setQuantity={setQuantity} />
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
