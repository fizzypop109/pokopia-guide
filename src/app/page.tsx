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
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 sm:py-10 flex flex-col gap-6 sm:gap-8">
      <section className="relative overflow-hidden rounded-3xl border-2 border-leaf-200 bg-gradient-to-br from-leaf-50 via-white to-sun-400/20 p-6 sm:p-8 shadow-[0_3px_0_0_rgba(193,170,121,0.4)]">
        <span className="pointer-events-none absolute -right-4 -top-6 text-8xl opacity-20 select-none">
          🌳
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-leaf-500 px-3 py-1 text-xs font-bold text-white shadow-sm">
          🌱 Welcome to your paradise
        </span>
        <h1 className="mt-3 font-display text-3xl sm:text-5xl font-bold text-leaf-800">
          All Pokémon
        </h1>
        <p className="mt-2 text-sand-600 max-w-xl text-base sm:text-lg">
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
