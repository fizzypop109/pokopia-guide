import Image from 'next/image';
import type { Pokemon } from '@/data/pokemon';
import { dex, specialtyIcon, spritePath, typeColor } from '@/utils/format';
import {Card} from "@/components/Card";

const RARITY_COLOR: Record<string, string> = {
  Common: 'text-zinc-500',
  Uncommon: 'text-emerald-600',
  Rare: 'text-blue-600',
  'Very Rare': 'text-purple-600',
};

export function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <Card
      href={`/pokemon/${pokemon.slug}`}
    >
      <div className="flex items-start gap-3">
        <div className="shrink-0 w-20 h-20 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 flex items-center justify-center overflow-hidden">
          <Image
            src={spritePath(pokemon.dexNumber)}
            alt={pokemon.name}
            width={80}
            height={80}
            className="object-contain group-hover:scale-105 transition"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <div className="text-xs font-mono text-zinc-500">
                {dex(pokemon.dexNumber)}
              </div>

              <h3 className="font-semibold text-base group-hover:text-emerald-600 transition truncate">
                {pokemon.name}
              </h3>

              <div className="text-xs text-zinc-500 truncate">
                {pokemon.classification}
              </div>
            </div>

            <span
              className={`shrink-0 text-xs font-medium ${RARITY_COLOR[pokemon.rarity] ?? 'text-zinc-500'}`}
            >
              {pokemon.rarity}
            </span>

          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-1">
        {pokemon.types.map((t) => (
          <span
            key={t}
            className={`text-xs px-2 py-0.5 rounded-full font-medium ${typeColor(t)}`}
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-2 text-xs text-zinc-500">
        <Image
          src={specialtyIcon(pokemon.specialty)}
          alt=""
          width={20}
          height={20}
          className="object-contain"
        />

        <span className="font-medium text-zinc-700 dark:text-zinc-300">
          {pokemon.specialty}
        </span>

        <span>·</span>

        <span>{pokemon.idealHabitat}</span>
      </div>
    </Card>
  );
}
