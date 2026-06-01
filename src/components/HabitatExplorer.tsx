'use client';

import { useMemo, useState } from 'react';
import type { AggregatedHabitat, IdealHabitat } from '@/data/pokemon';
import { idealHabitatIcon } from '@/utils/format';
import { HabitatCard, habitatIdealTypes } from './HabitatCard';

interface Props {
  habitats: AggregatedHabitat[];
  idealHabitats: IdealHabitat[];
}

export function HabitatExplorer({ habitats, idealHabitats }: Props) {
  const [active, setActive] = useState<IdealHabitat | null>(null);

  const filtered = useMemo(
    () =>
      active
        ? habitats.filter((h) => habitatIdealTypes(h).includes(active))
        : habitats,
    [habitats, active],
  );

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setActive(null)}
          className={`text-xs px-3 py-1 rounded-full font-semibold transition ${
            active === null
              ? 'bg-leaf-500 text-white shadow-sm'
              : 'bg-white text-sand-600 ring-1 ring-sand-200 hover:bg-sand-100'
          }`}
        >
          All
        </button>
        {idealHabitats.map((t) => {
          const on = active === t;
          return (
            <button
              key={t}
              onClick={() => setActive(on ? null : t)}
              className={`flex items-center gap-1 text-xs px-3 py-1 rounded-full font-semibold transition ${
                on
                  ? 'bg-leaf-500 text-white shadow-sm'
                  : 'bg-white text-sand-600 ring-1 ring-sand-200 hover:bg-sand-100'
              }`}
            >
              <span aria-hidden>{idealHabitatIcon(t)}</span>
              {t}
            </button>
          );
        })}
      </div>

      <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-leaf-100 px-3 py-1 text-sm font-semibold text-leaf-700">
        {filtered.length} of {habitats.length} habitats
      </span>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border-2 border-dashed border-sand-300 bg-white/60 p-12 text-center text-sand-500">
          <span className="block text-4xl mb-2">🍃</span>
          No habitats with that ideal condition.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((h) => (
            <HabitatCard key={h.slug} habitat={h} />
          ))}
        </div>
      )}
    </div>
  );
}
