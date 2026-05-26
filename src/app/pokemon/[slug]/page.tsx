import Image from 'next/image';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {POKEMON, getPokemonBySlug} from '@/data/pokemon';
import {dex, specialtyIcon, spritePath, typeColor} from '@/utils/format';
import {Card, Chips, Section, Stat} from "@/components";

const RARITY_COLOR: Record<string, string> = {
    Common: 'bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300',
    Uncommon: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
    Rare: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
    'Very Rare': 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
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
        <div className="mx-auto max-w-4xl px-6 py-10 flex flex-col gap-8">
            <Link
                href="/"
                className="text-sm text-emerald-600 hover:underline w-fit"
            >
                ← All Pokémon
            </Link>

            <header className="flex flex-col sm:flex-row sm:items-center gap-6">
                <div
                    className="shrink-0 w-48 h-48 rounded-2xl bg-linear-to-br from-emerald-50 to-zinc-100 dark:from-emerald-950/40 dark:to-zinc-900 flex items-center justify-center p-4">
                    <Image
                        src={spritePath(p.dexNumber)}
                        alt={p.name}
                        width={192}
                        height={192}
                        className="object-contain drop-shadow-md"
                        priority
                    />
                </div>

                <div className="flex flex-col gap-3 min-w-0">
                    <div className="flex items-center gap-3 text-sm">
                        <span className="font-mono text-zinc-500">{dex(p.dexNumber)}</span>


                    </div>

                    <h1 className="text-4xl font-bold tracking-tight">{p.name}</h1>

                    <div className="text-zinc-500">{p.classification}</div>

                    <div className="flex flex-wrap gap-2">
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

            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {p.description}
            </p>

            <section className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <Stat label="Height" value={p.height}/>

                <Stat label="Weight" value={p.weight}/>

                <Stat
                    label="Specialties"
                    value={
                        <div className="flex flex-col gap-2">
                            {p.specialties.map(s => (
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
                        <Link
                            href={`/habitats/${encodeURIComponent(p.idealHabitat.toLowerCase())}`}
                            className="text-emerald-600 hover:underline"
                        >
                            {p.idealHabitat}
                        </Link>
                    }
                />
            </section>

            <Section title="Local Habitats" hint="Specific spots where they nest">
                <div className="flex flex-row gap-3">
                    {p.localHabitats.map(h => {
                        const habitatSlug = h.name.toLowerCase().replace(/\s/g, "-");
                        return (
                            <Card key={h.name} href={`/habitats/${habitatSlug}`}>
                                <div className="flex flex-col items-center gap-3">
                                    <Image
                                        alt={h.name}
                                        width={100}
                                        height={50}
                                        src={`/habitats/${habitatSlug}.png`}
                                    />

                                    <p className="text-base font-medium group-hover:text-emerald-600 transition">
                                        {h.name}
                                    </p>

                                    <span
                                        className={`px-2 py-0.5 rounded-full font-medium ${RARITY_COLOR[h.rarity]}`}
                                    >
                                  {h.rarity}
                              </span>

                                    <ul className="flex flex-wrap gap-2">
                                        {h.locations.map((loc) => (
                                            <li key={loc}>
                                                <Link
                                                    href={`/locations/${encodeURIComponent(loc)}`}
                                                    className="text-sm px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition"
                                                >
                                                    {loc}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>

                                    <Chips items={h.availableTimes}/>

                                    <Chips items={h.availableWeather}/>
                                </div>
                            </Card>
                        )
                    })}
                </div>
            </Section>

            <Section title="Favorites" hint="Things this Pokémon enjoys">
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {p.favorites.map((f) => (
                        <li
                            key={f}
                            className="text-sm px-3 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                        >
                            {f}
                        </li>
                    ))}
                </ul>
            </Section>
        </div>
    );
}
