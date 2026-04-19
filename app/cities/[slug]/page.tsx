import Link from "next/link";
import { notFound } from "next/navigation";
import CityDetailTabs from "@/components/CityDetailTabs";
import { getCityBySlug, japanCities } from "@/data/mockData";

type CityDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  // Pre-render the three city detail pages from mock data.
  return japanCities.map((city) => ({ slug: city.slug }));
}

export default async function CityDetailPage({ params }: CityDetailPageProps) {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto w-full max-w-5xl px-6 py-10">
        <Link href="/" className="text-sm font-medium text-brand-700 hover:text-brand-500">
          {"<- Back to cities"}
        </Link>

        <header className="mt-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">{city.country}</p>
          <h1 className="mt-2 text-3xl font-black text-slate-900 md:text-4xl">{city.name}</h1>
          <p className="mt-2 text-base text-slate-700">{city.tagline}</p>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">{city.intro}</p>
        </header>

        <CityDetailTabs city={city} />
      </section>
    </main>
  );
}
