import Link from 'next/link';
import { notFound } from 'next/navigation';
import { POKEMON, allLocations } from '@/data/pokemon';
import { PokemonCard } from '@/components/PokemonCard';

export function generateStaticParams() {
  return allLocations().map((loc) => ({ location: encodeURIComponent(loc) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  return { title: `${decodeURIComponent(location)} — Pokopia Guide` };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location: raw } = await params;
  const location = decodeURIComponent(raw);
  const matches = POKEMON.filter((p) => p.locations.includes(location));
  if (matches.length === 0) notFound();

  return (
    <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col gap-8">
      <Link
        href="/locations"
        className="text-sm text-emerald-600 hover:underline w-fit"
      >
        ← All locations
      </Link>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
        {location}
      </h1>
      <p className="text-zinc-500">{matches.length} Pokémon found here</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {matches.map((p) => (
          <PokemonCard key={p.slug} pokemon={p} />
        ))}
      </div>
    </div>
  );
}
