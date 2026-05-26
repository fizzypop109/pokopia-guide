import Image from 'next/image';
import type {Pokemon} from '@/data/pokemon';
import {dex, specialtyIcon, spritePath, typeColor} from '@/utils/format';
import {Card} from "@/components/Card";

const RARITY_COLOR: Record<string, string> = {
    Common: 'text-zinc-500',
    Uncommon: 'text-emerald-600',
    Rare: 'text-blue-600',
    'Very Rare': 'text-purple-600',
};

export function PokemonCard({pokemon}: { pokemon: Pokemon }) {
    return (
        <Card
            href={`/pokemon/${pokemon.slug}`}
        >
            <div className="flex items-start gap-3">
                <div
                    className="shrink-0 w-20 h-20 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 flex items-center justify-center overflow-hidden">
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
                            <div className="text-xs text-left font-mono text-zinc-500">
                                {dex(pokemon.dexNumber)}
                            </div>

                            <h3 className="font-semibold text-base text-left group-hover:text-emerald-600 transition truncate">
                                {pokemon.name}
                            </h3>

                            <div className="text-xs text-zinc-500 truncate">
                                {pokemon.classification}
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            {[...new Set(pokemon.localHabitats.flatMap(h => h.rarity))].map(r => (
                                <span
                                    key={r}
                                    className={`shrink-0 text-xs font-medium ${RARITY_COLOR[r] ?? 'text-zinc-500'}`}
                                >
                  {r}
                </span>
                            ))}
                        </div>

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

            <div className="flex items-center gap-3 text-xs text-zinc-500">
                {pokemon.specialties.map(s => (
                    <div key={s} className="flex flex-col h-full items-center justify-end gap-1">
                        <Image
                            src={specialtyIcon(s)}
                            alt=""
                            width={20}
                            height={20}
                            className="object-contain"
                        />

                        <span className="font-medium text-zinc-700 dark:text-zinc-300">
                            {s}
                        </span>
                    </div>
                ))}
            </div>
        </Card>
    );
}
