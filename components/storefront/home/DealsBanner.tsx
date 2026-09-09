import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function DealsBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <div className="relative overflow-hidden rounded-[2rem] bg-neutral-900 px-8 py-16 text-white sm:px-12 lg:px-16">
        <div className="relative max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
            MadeMaze Deals
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Better finds.
            <span className="block text-neutral-400">Better prices.</span>
          </h2>

          <p className="mt-5 max-w-lg leading-7 text-neutral-300">
            Discover limited-time offers and exceptional finds selected by
            MadeMaze.
          </p>

          <Link
            href="/deals"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black hover:bg-neutral-200"
          >
            Shop deals
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}