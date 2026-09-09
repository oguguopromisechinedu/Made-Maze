import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

const products = [
  {
    name: "Smart Kitchen Organizer",
    category: "Kitchen",
    price: "$29.99",
    image: "/products/kitchen-organizer.jpg",
  },
  {
    name: "Minimalist Bathroom Set",
    category: "Bathroom",
    price: "$34.99",
    image: "/products/bathroom-set.jpg",
  },
  {
    name: "Travel Essentials Organizer",
    category: "Travel",
    price: "$24.99",
    image: "/products/travel-organizer.jpg",
  },
  {
    name: "Everyday Tech Stand",
    category: "Tech & Gadgets",
    price: "$39.99",
    image: "/products/tech-stand.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Curated for you
          </p>

          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            Featured Products
          </h2>

          <p className="mt-3 max-w-xl text-neutral-600">
            Practical, stylish finds selected to make everyday life a little
            better.
          </p>
        </div>

        <Link
          href="/shop"
          className="hidden items-center gap-2 text-sm font-semibold sm:flex"
        >
          View all
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-6">
        {products.map((product) => (
          <Link
            href="/shop"
            key={product.name}
            className="group"
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-100">
              <div className="absolute right-3 top-3 z-10 rounded-full bg-white p-2 shadow-sm">
                <Heart className="h-4 w-4" />
              </div>

              <div className="flex h-full items-center justify-center p-8 text-center">
                <span className="text-sm font-medium text-neutral-400">
                  Product Image
                </span>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                {product.category}
              </p>

              <h3 className="mt-1 font-semibold group-hover:underline">
                {product.name}
              </h3>

              <p className="mt-2 font-semibold">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>

      <Link
        href="/shop"
        className="mt-10 flex items-center justify-center gap-2 text-sm font-semibold sm:hidden"
      >
        View all products
        <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}