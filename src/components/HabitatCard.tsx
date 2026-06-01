import Image from 'next/image';
import type { AggregatedHabitat, IdealHabitat } from '@/data/pokemon';
import { habitatImage, idealHabitatIcon } from '@/utils/format';
import { Card } from '@/components/Card';

export function habitatIdealTypes(habitat: AggregatedHabitat): IdealHabitat[] {
  return [...new Set(habitat.residents.map((r) => r.pokemon.idealHabitat))].sort();
}

export function HabitatCard({ habitat }: { habitat: AggregatedHabitat }) {
  const idealTypes = habitatIdealTypes(habitat);
  return (
    <Card href={`/habitats/${habitat.slug}`}>
      <div className="w-full h-28 rounded-xl bg-leaf-50 ring-1 ring-leaf-100 flex items-center justify-center overflow-hidden">
        <Image
          src={habitatImage(habitat.slug)}
          alt={habitat.name}
          width={180}
          height={110}
          className="object-contain group-hover:scale-105 transition"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-display text-base font-bold text-sand-800 group-hover:text-leaf-600 transition">
          {habitat.name}
        </h3>

        <div className="flex flex-wrap gap-1">
          {idealTypes.map((t) => (
            <span
              key={t}
              className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium bg-leaf-100 text-leaf-700 ring-1 ring-leaf-200"
            >
              <span aria-hidden>{idealHabitatIcon(t)}</span>
              {t}
            </span>
          ))}
        </div>

        <span className="text-xs text-sand-500">
          {habitat.residents.length} Pokémon nest here
        </span>
      </div>
    </Card>
  );
}
