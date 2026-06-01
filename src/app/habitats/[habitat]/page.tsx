import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { allHabitats, getHabitatBySlug } from '@/data/pokemon';
import { habitatImage, idealHabitatIcon } from '@/utils/format';
import { Chips, PokemonCard, Section, Stat, habitatIdealTypes } from '@/components';

export function generateStaticParams() {
  return allHabitats().map((h) => ({ habitat: h.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ habitat: string }>;
}) {
  const { habitat } = await params;
  const h = getHabitatBySlug(habitat);
  if (!h) return { title: 'Not found' };
  return {
    title: `${h.name} — Pokopia Guide`,
    description: `${h.residents.length} Pokémon nest at ${h.name}.`,
  };
}

const RARITY_COLOR: Record<string, string> = {
  Common: 'bg-sand-100 text-sand-700 ring-1 ring-sand-200',
  Uncommon: 'bg-leaf-100 text-leaf-700 ring-1 ring-leaf-200',
  Rare: 'bg-sky-400/20 text-sky-600 ring-1 ring-sky-400/40',
  'Very Rare': 'bg-berry-400/20 text-berry-500 ring-1 ring-berry-400/40',
};

export default async function HabitatPage({
  params,
}: {
  params: Promise<{ habitat: string }>;
}) {
  const { habitat: raw } = await params;
  const habitat = getHabitatBySlug(decodeURIComponent(raw));
  if (!habitat) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-6 sm:py-10 flex flex-col gap-6 sm:gap-8">
      <Link
        href="/habitats"
        className="text-sm font-semibold text-leaf-600 hover:underline w-fit"
      >
        ← All habitats
      </Link>

      <header className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left gap-6">
        <div className="shrink-0 w-full sm:w-64 h-40 rounded-3xl bg-gradient-to-br from-leaf-100 via-leaf-50 to-sun-400/20 ring-2 ring-leaf-200 flex items-center justify-center p-4">
          <Image
            src={habitatImage(habitat.slug)}
            alt={habitat.name}
            width={240}
            height={150}
            className="object-contain drop-shadow-md"
            priority
          />
        </div>

        <div className="flex flex-col items-center sm:items-start gap-3 min-w-0">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-leaf-800">
            {habitat.name}
          </h1>
          <p className="text-sand-500">
            {habitat.residents.length} Pokémon nest here
          </p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-2">
            {habitatIdealTypes(habitat).map((t) => (
              <span
                key={t}
                className="flex items-center gap-1 text-sm px-3 py-1 rounded-full font-medium bg-leaf-100 text-leaf-700 ring-1 ring-leaf-200"
              >
                <span aria-hidden>{idealHabitatIcon(t)}</span>
                {t}
              </span>
            ))}
          </div>
        </div>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Stat
          label="Rarity"
          value={
            <div className="flex flex-wrap gap-1.5">
              {habitat.rarities.map((r) => (
                <span
                  key={r}
                  className={`text-xs px-2 py-0.5 rounded-full font-semibold ${RARITY_COLOR[r]}`}
                >
                  {r}
                </span>
              ))}
            </div>
          }
        />
        <Stat label="Time" value={<Chips items={habitat.availableTimes} />} />
        <Stat
          label="Weather"
          value={<Chips items={habitat.availableWeather} />}
        />
      </section>

      <Section title="Found at" hint="Locations where this spot appears">
        <ul className="flex flex-wrap gap-2">
          {habitat.locations.map((loc) => (
            <li key={loc}>
              <Link
                href={`/locations/${encodeURIComponent(loc)}`}
                className="text-sm px-3 py-1 rounded-full bg-sand-100 text-sand-700 ring-1 ring-sand-200 hover:bg-leaf-100 hover:text-leaf-700 transition"
              >
                📍 {loc}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Residents" hint="Pokémon that nest in this habitat">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {habitat.residents.map((r) => (
            <PokemonCard key={r.pokemon.slug} pokemon={r.pokemon} />
          ))}
        </div>
      </Section>
    </div>
  );
}
