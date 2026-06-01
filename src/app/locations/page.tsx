import Link from 'next/link';
import { POKEMON, allLocations } from '@/data/pokemon';

export const metadata = { title: 'Locations — Pokopia Guide' };

export default function LocationsPage() {
  const locations = allLocations();
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 sm:py-10 flex flex-col gap-6 sm:gap-8">
      <h1 className="font-display text-3xl sm:text-5xl font-bold text-leaf-800">
        Locations
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {locations.map((loc) => {
          const count = POKEMON.filter((p) =>
            p.localHabitats.some((h) => h.locations.includes(loc)),
          ).length;
          return (
            <li key={loc}>
              <Link
                href={`/locations/${encodeURIComponent(loc)}`}
                className="group flex items-center justify-between gap-3 rounded-2xl border-2 border-sand-200 bg-white/90 p-4 shadow-[0_2px_0_0_rgba(193,170,121,0.4)] hover:-translate-y-0.5 hover:border-leaf-400 hover:shadow-[0_6px_0_0_rgba(107,178,62,0.35)] transition"
              >
                <div className="flex items-center gap-2 font-display font-bold text-sand-800 group-hover:text-leaf-600 transition">
                  <span aria-hidden>📍</span>
                  {loc}
                </div>
                <div className="shrink-0 rounded-full bg-leaf-100 px-2.5 py-0.5 text-xs font-semibold text-leaf-700">{count}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
