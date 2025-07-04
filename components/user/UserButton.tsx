"use client";

import { createClient } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";
import { LogOutIcon, User2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import UserAvatar from "./UserAvatar";

export default function UserButton({
  user,
  avatarSize,
}: {
  user: User;
  avatarSize?: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const supabaseClient = createClient();
  const router = useRouter();

  const signOut = () => {
    startTransition(async () => {
      const { error } = await supabaseClient.auth.signOut();

      if (error) {
        console.error(error);
        toast.error(error.message);
      } else {
        router.refresh();
      }
    });
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger>
        <UserAvatar
          src={user?.user_metadata?.avatar || ""}
          size={avatarSize}
          className="bg-secondary"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link className="w-full cursor-pointer" href="/profile">
            Profile <User2 />
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <button
            className="w-full cursor-pointer"
            onClick={signOut}
            disabled={isPending}
          >
            Logout <LogOutIcon />
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
