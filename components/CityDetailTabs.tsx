"use client";

import { useMemo, useState } from "react";
import type { CityData } from "@/data/mockData";
import FoodCard from "@/components/FoodCard";
import SectionTitle from "@/components/SectionTitle";

type TabKey = "flights" | "stays" | "food";

type CityDetailTabsProps = {
  city: CityData;
};

const tabs: { key: TabKey; label: string }[] = [
  { key: "flights", label: "Flights" },
  { key: "stays", label: "Stays" },
  { key: "food", label: "Food" }
];

export default function CityDetailTabs({ city }: CityDetailTabsProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("flights");

  const tabContent = useMemo(() => {
    if (activeTab === "flights") {
      return (
        <div className="space-y-4">
          <SectionTitle
            title="Mock Flight Snapshot"
            description="Simple starter cards for route ideas. Prices are mock values."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {city.flights.map((flight) => (
              <article key={flight.id} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-base font-semibold text-slate-900">{flight.route}</h3>
                <p className="mt-2 text-sm text-slate-700">Airline: {flight.airline}</p>
                <p className="mt-1 text-sm font-semibold text-brand-700">From {flight.priceFrom}</p>
                <p className="mt-2 text-xs text-slate-500">{flight.note}</p>
              </article>
            ))}
          </div>
        </div>
      );
    }

    if (activeTab === "stays") {
      return (
        <div className="space-y-4">
          <SectionTitle
            title="Stay Ideas"
            description="Starter options across hotel, ryokan, and local stays."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {city.stays.map((stay) => (
              <article key={stay.id} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">{stay.type}</p>
                <h3 className="mt-1 text-base font-semibold text-slate-900">{stay.name}</h3>
                <p className="mt-2 text-sm text-slate-700">{stay.summary}</p>
                <p className="mt-3 text-sm font-semibold text-brand-700">From {stay.nightlyFrom} / night</p>
              </article>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        <SectionTitle
          title="Food Picks"
          description="Each food card includes category, summary, menu, rating, and location."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {city.foods.map((food) => (
            <FoodCard key={food.id} item={food} />
          ))}
        </div>
      </div>
    );
  }, [activeTab, city]);

  return (
    <section className="mt-8">
      <div className="mb-5 flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                isActive
                  ? "bg-brand-600 text-white shadow"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-brand-400 hover:text-brand-700"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {tabContent}
    </section>
  );
}
