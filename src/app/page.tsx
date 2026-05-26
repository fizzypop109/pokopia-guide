import { PokemonExplorer } from '@/components/PokemonExplorer';
import {
  POKEMON,
  allIdealHabitats,
  allLocations,
  allRarities,
  allSpecialties,
  allTypes,
} from '@/data/pokemon';
import { site } from '@/config/site';

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col gap-8">
      <section className="flex flex-col gap-2">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          All Pokémon
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-xl">
          {site.tagline}
        </p>
      </section>
      <PokemonExplorer
        pokemon={POKEMON}
        habitats={allIdealHabitats()}
        types={allTypes()}
        locations={allLocations()}
        specialties={allSpecialties()}
        rarities={allRarities()}
      />
    </div>
  );
}
