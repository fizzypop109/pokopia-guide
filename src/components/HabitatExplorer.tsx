'use client';

import { useMemo, useState } from 'react';
import type { AggregatedHabitat, IdealHabitat } from '@/data/pokemon';
import { idealHabitatIcon } from '@/utils/format';
import { HabitatCard, habitatIdealTypes } from './HabitatCard';
import { SearchInput } from './SearchInput';

interface Props {
  habitats: AggregatedHabitat[];
  idealHabitats: IdealHabitat[];
}

export function HabitatExplorer({ habitats, idealHabitats }: Props) {
  const [active, setActive] = useState<IdealHabitat | null>(null);
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return habitats.filter((h) => {
      if (active && !habitatIdealTypes(h).includes(active)) return false;
      return !(q &&
          !h.name.toLowerCase().includes(q) &&
          !h.residents.some((r) => r.pokemon.name.toLowerCase().includes(q)));

    });
  }, [habitats, active, query]);

  return (
    <div className="flex flex-col gap-5">
      <SearchInput
        value={query}
        onChange={setQuery}
        placeholder="Search habitats or Pokémon…"
      />
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((h) => (
            <HabitatCard key={h.slug} habitat={h} />
          ))}
        </div>
      )}
    </div>
  );
}
