"use client";

import Link from "next/link";
import { Search, Heart, User, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

const categories = [
  { name: "Kitchen", href: "/category/kitchen" },
  { name: "Bathroom", href: "/category/bathroom" },
  { name: "Car Accessories", href: "/category/car-accessories" },
  { name: "Travel", href: "/category/travel" },
  { name: "Pet Supplies", href: "/category/pet-supplies" },
  { name: "Tech & Gadgets", href: "/category/tech-gadgets" },
  { name: "Deals", href: "/deals" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="bg-black px-4 py-2 text-center text-xs font-medium tracking-wide text-white">
        Free shipping on qualifying orders • Made for everyday living
      </div>

      <header className="sticky top-0 z-50 border-b bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8">
          {/* Logo */}
          <Link href="/" className="text-2xl font-black tracking-tight">
            MadeMaze<span className="text-neutral-400">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 lg:flex">
            <Link
              href="/shop"
              className="text-sm font-semibold hover:text-neutral-500"
            >
              Shop
            </Link>

            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="text-sm font-medium whitespace-nowrap hover:text-neutral-500"
              >
                {category.name}
              </Link>
            ))}

            <Link
              href="/blog"
              className="text-sm font-medium hover:text-neutral-500"
            >
              Blog
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Link
              href="/search"
              className="rounded-full p-2 hover:bg-neutral-100"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Link>

            <Link
              href="/wishlist"
              className="hidden rounded-full p-2 hover:bg-neutral-100 sm:block"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5" />
            </Link>

            <Link
              href="/account"
              className="hidden rounded-full p-2 hover:bg-neutral-100 sm:block"
              aria-label="Account"
            >
              <User className="h-5 w-5" />
            </Link>

            <Link
              href="/cart"
              className="rounded-full p-2 hover:bg-neutral-100"
              aria-label="Cart"
            >
              <ShoppingBag className="h-5 w-5" />
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-full p-2 hover:bg-neutral-100 lg:hidden"
              aria-label="Menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="border-t bg-white lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4">
              <Link
                href="/shop"
                onClick={() => setMobileOpen(false)}
                className="border-b py-3 font-semibold"
              >
                Shop
              </Link>

              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b py-3 text-sm"
                >
                  {category.name}
                </Link>
              ))}

              <Link
                href="/blog"
                onClick={() => setMobileOpen(false)}
                className="py-3 text-sm"
              >
                Blog
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}