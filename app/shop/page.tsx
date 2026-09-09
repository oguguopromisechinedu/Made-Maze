"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/storefront/product/ProductCard";
import ProductFilters from "@/components/storefront/product/ProductFilters";
import ProductSort from "@/components/storefront/product/ProductSort";

const products = [
  {
    id: "smart-kitchen-organizer",
    name: "Smart Kitchen Organizer",
    category: "Kitchen",
    price: 29.99,
    compareAtPrice: 39.99,
    badge: "Bestseller",
  },
  {
    id: "minimalist-bathroom-set",
    name: "Minimalist Bathroom Set",
    category: "Bathroom",
    price: 34.99,
    compareAtPrice: 44.99,
    badge: "New",
  },
  {
    id: "travel-essentials-organizer",
    name: "Travel Essentials Organizer",
    category: "Travel",
    price: 24.99,
    compareAtPrice: 32.99,
  },
  {
    id: "everyday-tech-stand",
    name: "Everyday Tech Stand",
    category: "Tech & Gadgets",
    price: 39.99,
    compareAtPrice: 49.99,
  },
  {
    id: "car-console-organizer",
    name: "Car Console Organizer",
    category: "Car Accessories",
    price: 27.99,
    badge: "Popular",
  },
  {
    id: "pet-travel-bottle",
    name: "Pet Travel Water Bottle",
    category: "Pet Supplies",
    price: 19.99,
    compareAtPrice: 26.99,
  },
  {
    id: "modular-drawer-organizer",
    name: "Modular Drawer Organizer",
    category: "Kitchen",
    price: 22.99,
  },
  {
    id: "portable-tech-hub",
    name: "Portable Tech Hub",
    category: "Tech & Gadgets",
    price: 59.99,
    compareAtPrice: 74.99,
    badge: "New",
  },
  {
    id: "travel-compression-bag",
    name: "Travel Compression Bag Set",
    category: "Travel",
    price: 31.99,
  },
  {
    id: "bathroom-storage-rack",
    name: "Bathroom Storage Rack",
    category: "Bathroom",
    price: 42.99,
  },
  {
    id: "car-seat-organizer",
    name: "Premium Car Seat Organizer",
    category: "Car Accessories",
    price: 36.99,
    compareAtPrice: 46.99,
  },
  {
    id: "pet-food-storage",
    name: "Pet Food Storage Container",
    category: "Pet Supplies",
    price: 28.99,
  },
];

export default function ShopPage() {
  const [filters, setFilters] = useState({
    category: "All",
    price: "All",
  });

  const [sort, setSort] = useState("featured");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.category !== "All") {
      result = result.filter(
        (product) => product.category === filters.category
      );
    }

    if (filters.price === "under25") {
      result = result.filter((product) => product.price < 25);
    }

    if (filters.price === "25to50") {
      result = result.filter(
        (product) => product.price >= 25 && product.price <= 50
      );
    }

    if (filters.price === "50to100") {
      result = result.filter(
        (product) => product.price > 50 && product.price <= 100
      );
    }

    if (filters.price === "over100") {
      result = result.filter((product) => product.price > 100);
    }

    if (sort === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "newest") {
      result.reverse();
    }

    return result;
  }, [filters, sort]);

  return (
    <main>
      <section className="border-b bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            MadeMaze Collection
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Shop better.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
            Discover thoughtfully selected products designed to make
            everyday living simpler, smarter, and better.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          <ProductFilters
            filters={filters}
            setFilters={setFilters}
          />

          <div className="min-w-0 flex-1">
            <div className="mb-8 flex items-center justify-between gap-4 border-b pb-5">
              <div>
                <p className="text-sm text-neutral-500">
                  {filteredProducts.length} products
                </p>
              </div>

              <ProductSort
                value={sort}
                onChange={setSort}
              />
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            ) : (
              <div className="flex min-h-[400px] items-center justify-center rounded-3xl bg-neutral-50 text-center">
                <div>
                  <h2 className="text-xl font-bold">
                    No products found
                  </h2>
                  <p className="mt-2 text-sm text-neutral-500">
                    Try changing your filters.
                  </p>
                  <button
                    onClick={() =>
                      setFilters({
                        category: "All",
                        price: "All",
                      })
                    }
                    className="mt-5 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white"
                  >
                    Clear filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}