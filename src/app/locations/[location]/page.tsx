import Link from 'next/link';
import { notFound } from 'next/navigation';
import { POKEMON, allLocations, habitatHasLocation } from '@/data/pokemon';
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
  const matches = POKEMON.filter((p) =>
    p.localHabitats.some((h) => habitatHasLocation(h.locations, location)),
  );
  if (matches.length === 0) notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 sm:py-10 flex flex-col gap-6 sm:gap-8">
      <Link
        href="/locations"
        className="text-sm font-semibold text-leaf-600 hover:underline w-fit"
      >
        ← All locations
      </Link>
      <h1 className="font-display text-3xl sm:text-5xl font-bold text-leaf-800">
        📍 {location}
      </h1>
      <p className="text-sand-500">{matches.length} Pokémon found here</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {matches.map((p) => (
          <PokemonCard key={p.slug} pokemon={p} />
        ))}
      </div>
    </div>
  );
}
