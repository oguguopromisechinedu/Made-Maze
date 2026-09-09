import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const points = [
  "Thoughtfully selected products",
  "Built around real customer needs",
  "Continuously improved through feedback",
  "A brand focused on better everyday living",
];

export default function BrandStory() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
      <div className="grid overflow-hidden rounded-[2rem] bg-black text-white lg:grid-cols-2">
        <div className="flex min-h-[500px] items-center p-8 sm:p-12 lg:p-16">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
              The MadeMaze idea
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              We don't just find products.
              <span className="block text-neutral-400">
                We build better ones.
              </span>
            </h2>

            <p className="mt-6 text-base leading-7 text-neutral-300">
              MadeMaze starts by discovering useful products from around the
              world. We listen to our customers, learn what works, improve what
              doesn't, and build toward products that are truly MadeMaze.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Discover our story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="flex min-h-[500px] items-center bg-neutral-900 p-8 sm:p-12 lg:p-16">
          <div className="w-full">
            <p className="mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Our standards
            </p>

            <div className="space-y-6">
              {points.map((point) => (
                <div key={point} className="flex items-start gap-4">
                  <div className="mt-0.5 rounded-full border border-neutral-700 p-1">
                    <Check className="h-4 w-4" />
                  </div>

                  <p className="text-lg font-medium text-neutral-200">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 border-t border-neutral-800 pt-8">
              <p className="text-3xl font-black tracking-tight">
                Discover.
              </p>
              <p className="text-3xl font-black tracking-tight text-neutral-500">
                Improve.
              </p>
              <p className="text-3xl font-black tracking-tight">
                Create.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}