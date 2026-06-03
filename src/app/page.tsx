import { PokemonExplorer } from '@/components/PokemonExplorer';
import { ScrollToTop } from '@/components/ScrollToTop';
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
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 sm:py-10 flex flex-col gap-6 sm:gap-8">
      <section className="flex flex-col gap-2">
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-leaf-800">
          All Pokémon
        </h1>
        <p className="text-sand-600 max-w-xl text-base sm:text-lg">
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
      <ScrollToTop />
    </div>
  );
}
