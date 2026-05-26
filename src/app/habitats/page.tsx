import Link from 'next/link';
import { POKEMON, allIdealHabitats } from '@/data/pokemon';

export const metadata = { title: 'Habitats — Pokopia Guide' };

const ICON: Record<string, string> = {
  Bright: '☀️',
  Dim: '🌙',
  Damp: '💧',
  Cold: '❄️',
  Hot: '🔥',
  Windy: '🌬️',
  Rocky: '🪨',
  Sandy: '🏜️',
};

export default function HabitatsPage() {
  const habitats = allIdealHabitats();
  return (
    <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col gap-8">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
        Ideal Habitats
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        Conditions a Pokémon prefers. Different from the specific spots they
        nest in.
      </p>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {habitats.map((h) => {
          const count = POKEMON.filter((p) => p.idealHabitat === h).length;
          return (
            <li key={h}>
              <Link
                href={`/habitats/${encodeURIComponent(h.toLowerCase())}`}
                className="flex flex-col items-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 hover:border-emerald-400 transition"
              >
                <span className="text-4xl">{ICON[h] ?? '🌍'}</span>
                <span className="font-semibold">{h}</span>
                <span className="text-sm text-zinc-500">{count} Pokémon</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
