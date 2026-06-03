import Image from 'next/image';
import type { AggregatedHabitat, IdealHabitat } from '@/data/pokemon';
import { habitatImage, idealHabitatIcon, pokemonSprite } from '@/utils/format';
import { Card } from '@/components/Card';

const MAX_SPRITES = 6;

export function habitatIdealTypes(habitat: AggregatedHabitat): IdealHabitat[] {
  return [...new Set(habitat.residents.map((r) => r.pokemon.idealHabitat))].sort();
}

export function HabitatCard({ habitat }: { habitat: AggregatedHabitat }) {
  const idealTypes = habitatIdealTypes(habitat);
  return (
    <Card href={`/habitats/${habitat.slug}`}>
      <div className="w-fit mx-auto rounded-xl bg-leaf-50 ring-1 ring-leaf-100 flex items-center justify-center overflow-hidden">
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

        <div className="flex items-center gap-1">
          {habitat.residents.slice(0, MAX_SPRITES).map((r) => (
            <span
              key={r.pokemon.slug}
              className="w-7 h-7 rounded-full bg-leaf-50 ring-1 ring-leaf-100 flex items-center justify-center overflow-hidden"
              title={r.pokemon.name}
            >
              <Image
                src={pokemonSprite(r.pokemon)}
                alt={r.pokemon.name}
                width={28}
                height={28}
                className="object-contain"
              />
            </span>
          ))}
          {habitat.residents.length > MAX_SPRITES && (
            <span className="text-xs text-sand-500 font-medium">
              +{habitat.residents.length - MAX_SPRITES}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}
