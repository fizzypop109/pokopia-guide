import { allHabitats, allIdealHabitats } from '@/data/pokemon';
import { HabitatExplorer } from '@/components/HabitatExplorer';

export const metadata = { title: 'Habitats — Pokopia Guide' };

export default function HabitatsPage() {
  const habitats = allHabitats();
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 sm:py-10 flex flex-col gap-6 sm:gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-leaf-800">
          Habitats
        </h1>
        <p className="text-sand-600 text-base sm:text-lg">
          Every nesting spot in Pokopia. Tap one to see who lives there, plus
          its locations, times, and weather.
        </p>
      </div>
      <HabitatExplorer habitats={habitats} idealHabitats={allIdealHabitats()} />
    </div>
  );
}
