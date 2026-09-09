"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  Heart,
  Minus,
  Plus,
  ShoppingBag,
  Star,
  Truck,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";

const product = {
  name: "Smart Kitchen Organizer",
  category: "Kitchen",
  price: 29.99,
  compareAtPrice: 39.99,
  rating: 4.8,
  reviews: 124,
  description:
    "A simple, practical organizer designed to keep your kitchen essentials neatly arranged and easy to access.",
  features: [
    "Space-saving design",
    "Easy to clean",
    "Durable everyday construction",
    "Designed for modern kitchens",
  ],
};

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);

  const discount = Math.round(
    ((product.compareAtPrice - product.price) /
      product.compareAtPrice) *
      100
  );

  function addToCart() {
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  }

  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 pt-6 lg:px-8">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-black"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to shop
        </Link>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Product image */}
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-neutral-100">
              <span className="absolute left-5 top-5 z-10 rounded-full bg-black px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
                Bestseller
              </span>

              <button
                type="button"
                onClick={() => setLiked(!liked)}
                className="absolute right-5 top-5 z-10 rounded-full bg-white p-3 shadow-sm"
                aria-label="Wishlist"
              >
                <Heart
                  className={`h-5 w-5 ${
                    liked ? "fill-black" : ""
                  }`}
                />
              </button>

              <div className="flex h-full flex-col items-center justify-center">
                <div className="flex h-48 w-48 items-center justify-center rounded-[2rem] bg-white shadow-sm sm:h-64 sm:w-64">
                  <ShoppingBag className="h-16 w-16 text-neutral-300" />
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
                  MadeMaze
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="aspect-square rounded-xl bg-neutral-100"
                />
              ))}
            </div>
          </div>

          {/* Product information */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              {product.category}
            </p>

            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              {product.name}
            </h1>

            <div className="mt-5 flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-black" />
                <span className="text-sm font-semibold">
                  {product.rating}
                </span>
              </div>

              <span className="text-sm text-neutral-400">
                ({product.reviews} reviews)
              </span>
            </div>

            <div className="mt-7 flex items-center gap-3">
              <span className="text-3xl font-bold">
                ${product.price.toFixed(2)}
              </span>

              <span className="text-lg text-neutral-400 line-through">
                ${product.compareAtPrice.toFixed(2)}
              </span>

              <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-bold">
                Save {discount}%
              </span>
            </div>

            <p className="mt-7 text-base leading-7 text-neutral-600">
              {product.description}
            </p>

            <div className="mt-8 border-t pt-7">
              <h2 className="font-semibold">Why you'll love it</h2>

              <ul className="mt-4 space-y-3">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-neutral-600"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-white">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex gap-3">
              <div className="flex items-center rounded-full border">
                <button
                  type="button"
                  onClick={() =>
                    setQuantity(Math.max(1, quantity - 1))
                  }
                  className="p-4"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>

                <span className="w-8 text-center text-sm font-semibold">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-4"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              <button
                type="button"
                onClick={addToCart}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-black px-6 py-4 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                <ShoppingBag className="h-4 w-4" />
                {added ? "Added to cart" : "Add to cart"}
              </button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 border-t pt-8">
              <div className="text-center">
                <Truck className="mx-auto h-5 w-5" />
                <p className="mt-2 text-xs font-medium">
                  Fast shipping
                </p>
              </div>

              <div className="text-center">
                <RotateCcw className="mx-auto h-5 w-5" />
                <p className="mt-2 text-xs font-medium">
                  Easy returns
                </p>
              </div>

              <div className="text-center">
                <ShieldCheck className="mx-auto h-5 w-5" />
                <p className="mt-2 text-xs font-medium">
                  MadeMaze quality
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product information */}
      <section className="border-t bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              MadeMaze Standard
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight">
              Designed around real everyday needs.
            </h2>

            <p className="mt-5 leading-7 text-neutral-600">
              Every MadeMaze product starts with a simple question:
              can this make everyday life better? We select, test,
              improve, and eventually develop products around what
              customers actually need.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}