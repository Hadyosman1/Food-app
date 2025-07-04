import { cn } from "@/lib/utils";
import { User2Icon } from "lucide-react";
import Image from "next/image";

export default function UserAvatar({
  src,
  size = 32,
  className,
}: {
  src: string | null | undefined;
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex aspect-square items-center overflow-clip justify-center rounded-full shadow",
        className,
      )}
      style={{ width: size ?? 32 }}
    >
      {src ? (
        <Image
          width={size}
          height={size}
          src={src}
          alt="user"
          className="rounded-full object-cover"
        />
      ) : (
        <User2Icon className="size-full" />
      )}
    </div>
  );
}
