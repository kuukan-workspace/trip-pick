import type { FoodItem } from "@/data/mockData";

type FoodCardProps = {
  item: FoodItem;
};

export default function FoodCard({ item }: FoodCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">{item.category}</p>
          <h3 className="mt-1 text-lg font-semibold text-slate-900">{item.name}</h3>
        </div>
        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
          {item.rating.toFixed(1)} / 5
        </span>
      </div>

      <p className="mt-3 text-sm text-slate-700">{item.summary}</p>

      <dl className="mt-4 space-y-2 text-sm text-slate-700">
        <div>
          <dt className="font-medium text-slate-900">Recommended Menu</dt>
          <dd>{item.menu}</dd>
        </div>
        <div>
          <dt className="font-medium text-slate-900">Location</dt>
          <dd>{item.location}</dd>
        </div>
      </dl>

      <button
        type="button"
        className="mt-4 inline-flex w-full items-center justify-center rounded-lg border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600"
        disabled
      >
        Open Map (Coming Soon)
      </button>
    </article>
  );
}
