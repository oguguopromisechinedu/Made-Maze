"use client";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function ProductSort({
  value,
  onChange,
}: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-full border bg-white px-4 py-2.5 text-sm font-medium outline-none focus:border-black"
      aria-label="Sort products"
    >
      <option value="featured">Featured</option>
      <option value="newest">Newest</option>
      <option value="price-low">Price: Low to High</option>
      <option value="price-high">Price: High to Low</option>
    </select>
  );
}