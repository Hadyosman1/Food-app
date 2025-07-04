"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function NavLinks({
  isScrolled,
  className,
}: {
  isScrolled: boolean;
  className?: string;
}) {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={cn(
        "flex gap-2",
        {
          "text-secondary dark:text-secondary": !isScrolled,
        },
        className,
      )}
    >
      {navLinks.map((link) => (
        <Button
          variant={isActive(link.href) ? "default" : "ghost"}
          className={"rounded-full text-base font-semibold"}
          key={link.label}
          asChild
        >
          <Link href={link.href}>{link.label}</Link>
        </Button>
      ))}
    </nav>
  );
}
