import Image from 'next/image';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {POKEMON, getPokemonBySlug} from '@/data/pokemon';
import {dex, specialtyIcon, pokemonSprite, typeColor} from '@/utils/format';
import {Card, Chips, Section, Stat} from "@/components";

const RARITY_COLOR: Record<string, string> = {
    Common: 'bg-sand-100 text-sand-700 ring-1 ring-sand-200',
    Uncommon: 'bg-leaf-100 text-leaf-700 ring-1 ring-leaf-200',
    Rare: 'bg-sky-400/20 text-sky-600 ring-1 ring-sky-400/40',
    'Very Rare': 'bg-berry-400/20 text-berry-500 ring-1 ring-berry-400/40',
};

export function generateStaticParams() {
    return POKEMON.map((p) => ({slug: p.slug}));
}

export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ slug: string }>;
}) {
    const {slug} = await params;
    const p = getPokemonBySlug(slug);
    if (!p) return {title: 'Not found'};
    return {
        title: `${p.name} — Pokopia Guide`,
        description: `${p.classification}. Specialties: ${p.specialties}. Habitat: ${p.idealHabitat}.`,
    };
}

export default async function PokemonPage({
                                              params,
                                          }: {
    params: Promise<{ slug: string }>;
}) {
    const {slug} = await params;
    const p = getPokemonBySlug(slug);
    if (!p) notFound();

    return (
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-6 sm:py-10 flex flex-col gap-6 sm:gap-8">
            <Link
                href="/"
                className="text-sm font-semibold text-leaf-600 hover:underline w-fit"
            >
                ← All Pokémon
            </Link>

            <header className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left gap-6">
                <div
                    className="shrink-0 w-40 h-40 sm:w-48 sm:h-48 rounded-3xl bg-gradient-to-br from-leaf-100 via-leaf-50 to-sun-400/20 ring-2 ring-leaf-200 flex items-center justify-center p-4">
                    <Image
                        src={pokemonSprite(p)}
                        alt={p.name}
                        width={192}
                        height={192}
                        className="object-contain drop-shadow-md"
                        priority
                    />
                </div>

                <div className="flex flex-col items-center sm:items-start gap-3 min-w-0">
                    <div className="flex items-center gap-3 text-sm">
                        <span className="font-mono text-sand-400">{dex(p.dexNumber)}</span>


                    </div>

                    <h1 className="font-display text-4xl sm:text-5xl font-bold text-leaf-800">{p.name}</h1>

                    <div className="text-sand-500">{p.classification}</div>

                    <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                        {p.types.map((t) => (
                            <span
                                key={t}
                                className={`text-sm px-3 py-1 rounded-full font-medium ${typeColor(t)}`}
                            >
                {t}
              </span>
                        ))}
                    </div>
                </div>
            </header>

            {p.description && (
                <p className="rounded-2xl border-2 border-sand-200 bg-white/70 p-5 text-lg text-sand-700 leading-relaxed shadow-[0_2px_0_0_rgba(193,170,121,0.4)]">
                    {p.description}
                </p>
            )}

            <section className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <Stat label="Height" value={p.height}/>

                <Stat label="Weight" value={p.weight}/>

                <Stat
                    label="Specialties"
                    value={
                        <div className="flex flex-col gap-2">
                            {p.specialties.length === 0 ? (
                                <span className="text-sm text-sand-500 italic">Unknown</span>
                            ) : p.specialties.map(s => (
                                <span key={s} className="flex items-center gap-2">
                                  <Image
                                      src={specialtyIcon(s)}
                                      alt={s}
                                      width={24}
                                      height={24}
                                      className="object-contain"
                                  />
                                    {s}
                                </span>
                            ))}
                        </div>
                    }
                />

                <Stat
                    label="Ideal Habitat"
                    value={
                        <span className="inline-block rounded-full bg-leaf-100 px-3 py-0.5 text-sm font-semibold text-leaf-700 ring-1 ring-leaf-200">
                            {p.idealHabitat}
                        </span>
                    }
                />
            </section>

            <Section title="Local Habitats" hint="Specific spots where they nest">
                {p.howToFind && (
                    <div className="mb-4 rounded-2xl border-2 border-leaf-200 bg-leaf-50/70 p-4 text-sm text-leaf-800 leading-relaxed">
                        <p>
                            <span className="mr-1.5">🔎</span>{p.howToFind.text}
                        </p>
                        {p.howToFind.spots && p.howToFind.spots.length > 0 && (
                            p.howToFind.ordered ? (
                                <ol className="mt-3 flex flex-col gap-1.5 list-decimal pl-5">
                                    {p.howToFind.spots.map((spot, index) => (
                                        <li key={spot.place ?? `detail-${index}`} className="pl-1">
                                            {spot.place && (
                                                <>
                                                    <span className="font-semibold">{spot.place}:</span>{" "}
                                                </>
                                            )}
                                            <span>{spot.detail}</span>
                                        </li>
                                    ))}
                                </ol>
                            ) : (
                                <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5">
                                    {p.howToFind.spots.map((spot, index) => (
                                        <div key={spot.place ?? `detail-${index}`} className="contents">
                                            {spot.place ? (
                                                <>
                                                    <dt className="font-semibold">{spot.place}:</dt>
                                                    <dd>{spot.detail}</dd>
                                                </>
                                            ) : (
                                                <dd className="col-span-2">{spot.detail}</dd>
                                            )}
                                        </div>
                                    ))}
                                </dl>
                            )
                        )}
                    </div>
                )}
                {p.localHabitats.length === 0 ? (
                    <p className="text-sm text-sand-500 italic">
                        Not attracted by any habitat — obtained through other means.
                    </p>
                ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {p.localHabitats.map(h => {
                        const habitatSlug = h.name.toLowerCase().replace(/\s/g, "-");
                        return (
                            <Card key={h.name} href={`/habitats/${habitatSlug}`}>
                                {/* Header: art + name + rarity */}
                                <div className="flex items-center gap-3">
                                    <div className="shrink-0 w-24 h-14 rounded-xl bg-leaf-50 ring-1 ring-leaf-100 flex items-center justify-center overflow-hidden">
                                        <Image
                                            alt={h.name}
                                            width={100}
                                            height={50}
                                            src={`/habitats/${habitatSlug}.png`}
                                            className="object-contain"
                                        />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <p className="font-display text-base font-bold text-sand-800 group-hover:text-leaf-600 transition truncate">
                                            {h.name}
                                        </p>
                                        <span
                                            className={`mt-1 inline-block text-xs px-2 py-0.5 rounded-full font-semibold ${RARITY_COLOR[h.rarity]}`}
                                        >
                                            {h.rarity}
                                        </span>
                                    </div>
                                </div>

                                <div className="border-t-2 border-dashed border-sand-200" />

                                {/* Details */}
                                <dl className="flex flex-col gap-3">
                                    <DetailRow label="Build in">
                                        {h.locations === 'any' ? (
                                            <span className="inline-flex items-center gap-1 text-sm px-3 py-1 rounded-full bg-leaf-100 text-leaf-700 ring-1 ring-leaf-200">
                                                🗺️ Any location
                                            </span>
                                        ) : (
                                            <ul className="flex flex-wrap gap-1.5">
                                                {h.locations.map((loc) => (
                                                    <li key={loc}>
                                                        <span className="text-sm px-3 py-1 rounded-full bg-sand-100 text-sand-700 ring-1 ring-sand-200">
                                                            📍 {loc}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </DetailRow>

                                    <DetailRow label="Time">
                                        <Chips items={h.availableTimes}/>
                                    </DetailRow>

                                    <DetailRow label="Weather">
                                        <Chips items={h.availableWeather}/>
                                    </DetailRow>
                                </dl>
                            </Card>
                        )
                    })}
                </div>
                )}
            </Section>

            <Section title="Favorites" hint="Things this Pokémon enjoys">
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {p.favorites.map((f) => (
                        <li
                            key={f}
                            className="flex items-center gap-2 text-sm px-3 py-2 rounded-xl bg-leaf-50 text-sand-700 ring-1 ring-leaf-100 before:content-['🍓']"
                        >
                            {f}
                        </li>
                    ))}
                </ul>
            </Section>
        </div>
    );
}

function DetailRow({label, children}: { label: string; children: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-1.5">
            <dt className="text-xs font-bold uppercase tracking-wider text-leaf-600">
                {label}
            </dt>
            <dd>{children}</dd>
        </div>
    );
}
