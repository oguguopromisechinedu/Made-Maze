import Link from "next/link";

const shopLinks = [
  ["Shop All", "/shop"],
  ["Kitchen", "/category/kitchen"],
  ["Bathroom", "/category/bathroom"],
  ["Travel", "/category/travel"],
  ["Tech & Gadgets", "/category/tech-gadgets"],
];

const companyLinks = [
  ["About MadeMaze", "/about"],
  ["Our Story", "/our-story"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
];

const helpLinks = [
  ["FAQ", "/faq"],
  ["Shipping", "/shipping"],
  ["Returns", "/returns"],
  ["Track Order", "/track-order"],
];

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="text-2xl font-black tracking-tight">
              MadeMaze<span className="text-neutral-400">.</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-neutral-500">
              Discover better products for everyday living. MadeMaze is
              building a brand around useful ideas, thoughtful design, and
              continuous improvement.
            </p>
          </div>

          <FooterColumn title="Shop" links={shopLinks} />
          <FooterColumn title="MadeMaze" links={companyLinks} />
          <FooterColumn title="Help" links={helpLinks} />
        </div>

        <div className="mt-16 border-t pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="font-semibold">Stay in the MadeMaze loop.</h3>
              <p className="mt-1 text-sm text-neutral-500">
                Get new product drops, useful finds, and exclusive offers.
              </p>
            </div>

            <form className="flex w-full max-w-md gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-1 rounded-full border px-5 py-3 text-sm outline-none focus:border-black"
              />

              <button
                type="submit"
                className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} MadeMaze. All rights reserved.</p>

          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-black">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-black">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[][];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold">{title}</h3>

      <div className="mt-5 flex flex-col gap-3">
        {links.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            className="text-sm text-neutral-500 hover:text-black"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}