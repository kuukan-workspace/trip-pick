import CityCard from "@/components/CityCard";
import { japanCities } from "@/data/mockData";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-50 via-slate-50 to-white">
      <section className="mx-auto w-full max-w-5xl px-6 py-14">
        <p className="inline-flex rounded-full bg-brand-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
          Japan-only MVP
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">TripPick</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700 md:text-lg">
          Pick a city and instantly explore mock <strong>Flights</strong>, <strong>Stays</strong>, and
          <strong> Food</strong> recommendations. This starter version is intentionally simple and easy to edit.
        </p>
      </section>

      <section className="mx-auto grid w-full max-w-5xl gap-5 px-6 pb-16 md:grid-cols-3">
        {japanCities.map((city) => (
          <CityCard key={city.slug} city={city} />
        ))}
      </section>
    </main>
  );
}
