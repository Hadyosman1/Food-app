import { InfoIcon, MinusIcon, PlusIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

interface ProductQuantityProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const MAX_QUANTITY_PER_ITEM = 8;

export default function ProductQuantity({
  quantity,
  setQuantity,
}: ProductQuantityProps) {
  return (
    <>
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
              setQuantity((prev) => Math.min(MAX_QUANTITY_PER_ITEM, prev + 1))
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
    </>
  );
}
