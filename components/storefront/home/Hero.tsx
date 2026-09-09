import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-100">
      <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:px-8">
        <div className="max-w-xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Welcome to MadeMaze
          </p>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Better things for
            <span className="block">everyday living.</span>
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-8 text-neutral-600">
            Discover thoughtfully selected products designed to make your
            everyday spaces, routines, and adventures better.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Shop Collection
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/deals"
              className="inline-flex items-center rounded-full border border-black px-7 py-4 text-sm font-semibold transition hover:bg-black hover:text-white"
            >
              Explore Deals
            </Link>
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-3xl bg-neutral-200">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
                MadeMaze
              </p>
              <p className="mt-3 text-4xl font-black tracking-tight">
                Discover better.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}