import Link from 'next/link';
import { POKEMON, allLocations } from '@/data/pokemon';

export const metadata = { title: 'Locations — Pokopia Guide' };

export default function LocationsPage() {
  const locations = allLocations();
  return (
    <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col gap-8">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
        Locations
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {locations.map((loc) => {
          const count = POKEMON.filter((p) => p.locations.includes(loc)).length;
          return (
            <li key={loc}>
              <Link
                href={`/locations/${encodeURIComponent(loc)}`}
                className="block rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 hover:border-emerald-400 transition"
              >
                <div className="font-semibold">{loc}</div>
                <div className="text-sm text-zinc-500">{count} Pokémon</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
