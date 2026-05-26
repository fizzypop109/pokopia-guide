import Link from 'next/link';
import { notFound } from 'next/navigation';
import { POKEMON, allIdealHabitats, type IdealHabitat } from '@/data/pokemon';
import { PokemonCard } from '@/components/PokemonCard';

export function generateStaticParams() {
  return allIdealHabitats().map((h) => ({ habitat: h.toLowerCase() }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ habitat: string }>;
}) {
  const { habitat } = await params;
  return { title: `${cap(habitat)} habitat — Pokopia Guide` };
}

function cap(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default async function HabitatPage({
  params,
}: {
  params: Promise<{ habitat: string }>;
}) {
  const { habitat: raw } = await params;
  const habitat = cap(decodeURIComponent(raw)) as IdealHabitat;
  const matches = POKEMON.filter((p) => p.idealHabitat === habitat);
  if (matches.length === 0) notFound();

  return (
    <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col gap-8">
      <Link
        href="/habitats"
        className="text-sm text-emerald-600 hover:underline w-fit"
      >
        ← All habitats
      </Link>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
        {habitat}
      </h1>
      <p className="text-zinc-500">
        {matches.length} Pokémon prefer this habitat
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {matches.map((p) => (
          <PokemonCard key={p.slug} pokemon={p} />
        ))}
      </div>
    </div>
  );
}
