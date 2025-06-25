import UserButton from "@/components/user/UserButton";
import { MenuIcon } from "lucide-react";
import AuthButton from "../auth/AuthButton";
import CartButton from "../CartButton";
import NavLinks from "./NavLinks";
import ThemeSwitcher from "./ThemeSwitcher";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

export default function MobileMenu({ className }: { className?: string }) {
  const user = null;

  return (
    <Sheet>
      <SheetTrigger className={className} asChild>
        <Button variant="outline" size="icon">
          <MenuIcon />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-6 px-4">
          <NavLinks isScrolled className="flex-col" />
          <hr />
          <div className="flex flex-wrap items-center justify-center gap-3">
            <ThemeSwitcher />

            <span className="text-secondary-foreground">|</span>

            <CartButton />
            {user ? <UserButton user={user} /> : <AuthButton />}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
