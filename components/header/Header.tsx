"use client";

import AuthButton from "@/components/auth/AuthButton";
import CartButton from "@/components/cart/CartButton";
import MobileMenu from "@/components/header/MobileMenu";
import WishlistButton from "@/components/wishlist/WishlistButton";
import useUser from "@/hooks/useUser";
import { cn } from "@/lib/utils";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import UserButton from "../user/UserButton";
import NavLinks from "./NavLinks";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { user } = useUser();

  useEffect(() => {
    const handleHeaderScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    handleHeaderScroll();

    window.addEventListener("scroll", handleHeaderScroll);

    return () => {
      window.removeEventListener("scroll", handleHeaderScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 h-(--header-height) w-full transition-all duration-300",
        {
          "bg-header shadow": isScrolled || !isHomePage,
        },
      )}
    >
      <div className="container flex items-center gap-5 py-5">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={90}
            height={60}
            className={cn({
              "invert-100 dark:invert-0": isScrolled || !isHomePage,
            })}
          />
        </Link>

        <div className={cn("ms-auto hidden items-center gap-3 md:flex")}>
          <NavLinks isScrolled={isScrolled || !isHomePage} />

          <span className="text-secondary-foreground">|</span>

          <div className="flex items-center gap-2">
            <ThemeSwitcher />
          </div>

          <span className="text-secondary-foreground">|</span>

          {user && (
            <>
              <WishlistButton />
              <CartButton />
            </>
          )}

          {!user && <AuthButton />}
          {user && <UserButton user={user} />}
        </div>

        <MobileMenu className="ms-auto md:hidden" />
      </div>
    </header>
  );
}
