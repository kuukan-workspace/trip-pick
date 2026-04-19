import Link from "next/link";
import type { CityData } from "@/data/mockData";

type CityCardProps = {
  city: CityData;
};

export default function CityCard({ city }: CityCardProps) {
  return (
    <Link
      href={`/cities/${city.slug}`}
      className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">{city.country}</p>
      <h2 className="mt-2 text-2xl font-bold text-slate-900">{city.name}</h2>
      <p className="mt-3 text-sm text-slate-600">{city.tagline}</p>
      <p className="mt-4 text-sm font-medium text-brand-700 group-hover:text-brand-500">Explore city plan &rarr;</p>
    </Link>
  );
}
