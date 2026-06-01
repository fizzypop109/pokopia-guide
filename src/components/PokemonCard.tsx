import Image from 'next/image';
import {isAnyLocation, type LocationName, type Pokemon} from '@/data/pokemon';
import {dex, specialtyIcon, spritePath, typeColor} from '@/utils/format';
import {Card} from "@/components/Card";

const RARITY_COLOR: Record<string, string> = {
    Common: 'text-sand-500',
    Uncommon: 'text-leaf-600',
    Rare: 'text-sky-500',
    'Very Rare': 'text-berry-500',
};

export function PokemonCard({pokemon}: { pokemon: Pokemon }) {
    const anywhere = pokemon.localHabitats.some(h => isAnyLocation(h.locations));
    const locations: LocationName[] = anywhere
        ? []
        : [...new Set(pokemon.localHabitats.flatMap(h => h.locations as LocationName[]))];
    return (
        <Card
            href={`/pokemon/${pokemon.slug}`}
        >
            <div className="flex items-start gap-3">
                <div
                    className="shrink-0 w-20 h-20 rounded-2xl bg-leaf-50 ring-1 ring-leaf-100 flex items-center justify-center overflow-hidden">
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
                            <div className="text-xs text-left font-mono text-sand-400">
                                {dex(pokemon.dexNumber)}
                            </div>

                            <h3 className="font-display font-bold text-base text-left text-sand-800 group-hover:text-leaf-600 transition truncate">
                                {pokemon.name}
                            </h3>

                            <div className="text-xs text-sand-500 truncate">
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

            {(anywhere || locations.length > 0) && (
            <div className="flex flex-col gap-1">
                <span className="text-[0.65rem] font-bold uppercase tracking-wider text-leaf-600">
                    Found at
                </span>
                <div className="flex flex-wrap gap-1">
                    {anywhere ? (
                        <span className="flex items-center gap-0.5 text-xs px-2 py-0.5 rounded-full bg-leaf-100 text-leaf-700 ring-1 ring-leaf-200">
                            <span aria-hidden>🗺️</span>
                            Any location
                        </span>
                    ) : (
                        locations.map(loc => (
                            <span
                                key={loc}
                                className="flex items-center gap-0.5 text-xs px-2 py-0.5 rounded-full bg-sand-100 text-sand-700 ring-1 ring-sand-200"
                            >
                                <span aria-hidden>📍</span>
                                {loc}
                            </span>
                        ))
                    )}
                </div>
            </div>
            )}

            <div className="mt-auto flex flex-wrap items-end gap-x-4 gap-y-2 text-xs text-sand-500">
                {pokemon.specialties.map(s => (
                    <div key={s} className="flex flex-col items-center justify-end gap-1">
                        <Image
                            src={specialtyIcon(s)}
                            alt=""
                            width={20}
                            height={20}
                            className="object-contain"
                        />

                        <span className="font-medium text-sand-700">
                            {s}
                        </span>
                    </div>
                ))}
            </div>
        </Card>
    );
}
