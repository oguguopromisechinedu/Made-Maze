"use client";

import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  badge?: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false);

  const discount =
    product.compareAtPrice
      ? Math.round(
          ((product.compareAtPrice - product.price) /
            product.compareAtPrice) *
            100
        )
      : null;

  return (
    <div className="group">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-100">
        {product.badge && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-black px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white">
            {product.badge}
          </span>
        )}

        {discount && (
          <span className="absolute bottom-3 left-3 z-10 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold">
            -{discount}%
          </span>
        )}

        <button
          type="button"
          onClick={() => setLiked(!liked)}
          className="absolute right-3 top-3 z-10 rounded-full bg-white p-2.5 shadow-sm transition hover:scale-105"
          aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            className={`h-4 w-4 ${
              liked ? "fill-black" : ""
            }`}
          />
        </button>

        <Link
          href={`/products/${product.id}`}
          className="flex h-full items-center justify-center"
        >
          <div className="text-center transition duration-300 group-hover:scale-105">
            <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-3xl bg-white shadow-sm">
              <ShoppingBag className="h-10 w-10 text-neutral-300" />
            </div>
            <p className="mt-4 text-xs font-medium uppercase tracking-widest text-neutral-400">
              MadeMaze
            </p>
          </div>
        </Link>
      </div>

      <Link href={`/products/${product.id}`}>
        <div className="mt-4">
          <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
            {product.category}
          </p>

          <h3 className="mt-1 font-semibold leading-6 group-hover:underline">
            {product.name}
          </h3>

          <div className="mt-2 flex items-center gap-2">
            <span className="font-semibold">
              ${product.price.toFixed(2)}
            </span>

            {product.compareAtPrice && (
              <span className="text-sm text-neutral-400 line-through">
                ${product.compareAtPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}