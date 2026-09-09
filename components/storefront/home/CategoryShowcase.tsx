import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    name: "Kitchen",
    description: "Smarter solutions for your kitchen.",
    href: "/category/kitchen",
  },
  {
    name: "Bathroom",
    description: "Upgrade your everyday essentials.",
    href: "/category/bathroom",
  },
  {
    name: "Car Accessories",
    description: "Make every drive better.",
    href: "/category/car-accessories",
  },
  {
    name: "Travel",
    description: "Go further. Pack smarter.",
    href: "/category/travel",
  },
  {
    name: "Pet Supplies",
    description: "Better essentials for your best friend.",
    href: "/category/pet-supplies",
  },
  {
    name: "Tech & Gadgets",
    description: "Useful technology for everyday life.",
    href: "/category/tech-gadgets",
  },
];

export default function CategoryShowcase() {
  return (
    <section className="bg-neutral-100 py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Explore MadeMaze
          </p>

          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            Shop by category
          </h2>

          <p className="mt-3 max-w-xl text-neutral-600">
            Discover useful products across the spaces and moments that matter
            most.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative min-h-[260px] overflow-hidden rounded-3xl bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-neutral-100" />

              <div className="relative flex h-full flex-col justify-between">
                <div className="flex justify-end">
                  <div className="rounded-full border p-2 transition group-hover:bg-black group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                    MadeMaze
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    {category.name}
                  </h3>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-neutral-500">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/categories"
          className="mt-8 flex items-center justify-center gap-2 text-sm font-semibold"
        >
          View all categories
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}