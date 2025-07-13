"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  images: string[];
  alt: string;
}

export default function ProductImages({ images, alt }: ProductImagesProps) {
  const [selectedImage, setSelectedImages] = useState(images[0]);

  return (
    <div className="w-full">
      <div className="bg-card relative mx-auto aspect-square max-h-[500px] overflow-hidden rounded-xl shadow-lg">
        <Image
          src={selectedImage}
          alt={alt}
          width={500}
          height={500}
          className="w-full rounded-xl object-cover object-center"
          priority
          key={selectedImage}
        />
      </div>
      {images.length > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {images.map((img, i) => {
            const isSelected = img === selectedImage;

            return (
              <button
                key={i}
                className={cn(
                  "border-muted relative size-28 cursor-pointer overflow-hidden rounded-lg border transition-all duration-200 ease-in-out",
                  {
                    "outline-primary outline-2 outline-offset-0": isSelected,
                    "hover:brightness-75": !isSelected,
                  },
                )}
                onClick={() => setSelectedImages(img)}
              >
                <Image
                  src={img}
                  alt={alt + " image " + (i + 1)}
                  fill
                  className="object-cover object-center"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
