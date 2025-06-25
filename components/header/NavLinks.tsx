import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const navLinks = [
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
          variant="ghost"
          className="text-base font-semibold"
          key={link.label}
          asChild
        >
          <Link href={link.href}>{link.label}</Link>
        </Button>
      ))}
    </nav>
  );
}
