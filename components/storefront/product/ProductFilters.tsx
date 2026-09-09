"use client";

import { SlidersHorizontal, X } from "lucide-react";

type Filters = {
  category: string;
  price: string;
};

type Props = {
  filters: Filters;
  setFilters: (filters: Filters) => void;
};

export default function ProductFilters({
  filters,
  setFilters,
}: Props) {
  const activeFilters =
    filters.category !== "All" || filters.price !== "All";

  return (
    <aside className="w-full lg:w-60">
      <div className="flex items-center justify-between border-b pb-4">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          <h2 className="font-semibold">Filters</h2>
        </div>

        {activeFilters && (
          <button
            onClick={() =>
              setFilters({
                category: "All",
                price: "All",
              })
            }
            className="text-xs font-medium underline"
          >
            Clear
          </button>
        )}
      </div>

      <div className="mt-6">
        <p className="text-sm font-semibold">Category</p>

        <div className="mt-4 space-y-3">
          {[
            "All",
            "Kitchen",
            "Bathroom",
            "Car Accessories",
            "Travel",
            "Pet Supplies",
            "Tech & Gadgets",
          ].map((category) => (
            <button
              key={category}
              onClick={() =>
                setFilters({
                  ...filters,
                  category,
                })
              }
              className={`block text-sm transition ${
                filters.category === category
                  ? "font-semibold text-black"
                  : "text-neutral-500 hover:text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <p className="text-sm font-semibold">Price</p>

        <div className="mt-4 space-y-3">
          {[
            ["All", "All"],
            ["Under $25", "under25"],
            ["$25 – $50", "25to50"],
            ["$50 – $100", "50to100"],
            ["Over $100", "over100"],
          ].map(([label, value]) => (
            <button
              key={value}
              onClick={() =>
                setFilters({
                  ...filters,
                  price: value,
                })
              }
              className={`block text-sm transition ${
                filters.price === value
                  ? "font-semibold text-black"
                  : "text-neutral-500 hover:text-black"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}