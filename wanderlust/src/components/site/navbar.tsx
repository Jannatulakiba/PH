"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User } from "lucide-react";
import { cn } from "cn";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "My Bookings", href: "/bookings" },
  { label: "Admin", href: "/admin" },
] as const;

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <nav className="mx-auto grid h-12 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6 lg:px-10">
        {/* Left — primary navigation */}
        <ul className="flex items-center gap-6 lg:gap-9">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "text-sm transition-colors hover:text-brand",
                    isActive
                      ? "text-brand underline underline-offset-4"
                      : "text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Center — logo */}
        <Link
          href="/"
          className="font-heading text-xl font-bold tracking-wide text-brand sm:text-2xl"
        >
          Wanderlast
        </Link>

        {/* Right — account links */}
        <ul className="flex items-center justify-end gap-6 lg:gap-9">
          <li>
            <Link
              href="/profile"
              className="flex items-center gap-1.5 text-sm text-foreground transition-colors hover:text-brand"
            >
              <User className="size-4" strokeWidth={1.75} />
              Profile
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="text-sm text-foreground transition-colors hover:text-brand"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              href="/signup"
              className="text-sm text-foreground transition-colors hover:text-brand"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
