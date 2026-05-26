export type PokemonType =
  | 'Normal'
  | 'Fire'
  | 'Water'
  | 'Grass'
  | 'Electric'
  | 'Ice'
  | 'Fighting'
  | 'Poison'
  | 'Ground'
  | 'Flying'
  | 'Psychic'
  | 'Bug'
  | 'Rock'
  | 'Ghost'
  | 'Dragon'
  | 'Dark'
  | 'Steel'
  | 'Fairy';

export type IdealHabitat =
  | 'Bright'
  | 'Dim'
  | 'Damp'
  | 'Cold'
  | 'Hot'
  | 'Windy'
  | 'Rocky'
  | 'Sandy';

export type Rarity = 'Common' | 'Uncommon' | 'Rare' | 'Very Rare';

export type TimeOfDay = 'Morning' | 'Day' | 'Evening' | 'Night';

export type Weather = 'Sun' | 'Cloud' | 'Rain' | 'Snow' | 'Storm';

export type Specialty =
  | 'Appraise'
  | 'Build'
  | 'Bulldoze'
  | 'Burn'
  | 'Chop'
  | 'Collect'
  | 'Crush'
  | 'DJ'
  | 'Dream Island'
  | 'Eat'
  | 'Engineer'
  | 'Explode'
  | 'Fly'
  | 'Gather'
  | 'Gather Honey'
  | 'Generate'
  | 'Grow'
  | 'Hype'
  | 'Illuminate'
  | 'Litter'
  | 'Paint'
  | 'Party'
  | 'Rarify'
  | 'Recycle'
  | 'Search'
  | 'Storage'
  | 'Teleport'
  | 'Trade'
  | 'Transform'
  | 'Water'
  | 'Yawn';

export type Habitat = {
  name: string;
  locations: string[];
  rarity: Rarity;
  availableTimes: TimeOfDay[];
  availableWeather: Weather[];
}

export interface Pokemon {
  slug: string;
  dexNumber: number;
  name: string;
  classification: string;
  types: PokemonType[];
  height: string;
  weight: string;
  specialties: Specialty[];
  idealHabitat: IdealHabitat;
  localHabitats: Habitat[];
  favorites: string[];
  description: string;
  spriteUrl?: string;
}

export const POKEMON: Pokemon[] = [
  {
    slug: 'bulbasaur',
    dexNumber: 1,
    name: 'Bulbasaur',
    classification: 'Seed Pokémon',
    types: ['Grass', 'Poison'],
    height: '2\'04" (0.7m)',
    weight: '15.2 lbs (6.9 kg)',
    specialties: ['Grow'],
    idealHabitat: 'Bright',
    localHabitats: [
      {
        name: "Tall Grass",
        locations: [
          'Withered Wastelands',
          'Bleak Beach',
          'Rocky Ridges',
          'Sparkling Skylands',
          'Palette Town',
          'Cloud Island',
        ],
        rarity: 'Common',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
      {
        name: "Bench with greenery",
        locations: [
          'Withered Wastelands',
          'Bleak Beach',
          'Rocky Ridges',
          'Sparkling Skylands',
          'Palette Town',
          'Cloud Island',
        ],
        rarity: 'Common',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Lots of nature',
      'Soft stuff',
      'Cute stuff',
      'Lots of water',
      'Group Activities',
      'Sweet flavors',
    ],
    description:
      'A seed on its back bursts into bloom in warm sunlight. Loves group activities and sweet flavors.',
  },
  {
    slug: 'ivysaur',
    dexNumber: 2,
    name: 'Ivysaur',
    classification: 'Seed Pokémon',
    types: ['Grass', 'Poison'],
    height: '3\'03" (1m)',
    weight: '28.7 lbs (13 kg)',
    specialties: ['Grow'],
    idealHabitat: 'Bright',
    localHabitats: [
      {
        name: "Field of Flowers",
        locations: [
          'Withered Wastelands',
          'Bleak Beach',
          'Rocky Ridges',
          'Sparkling Skylands',
          'Palette Town',
          'Cloud Island',
        ],
        rarity: 'Rare',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
      {
        name: "Bench with greenery",
        locations: [
          'Withered Wastelands',
          'Bleak Beach',
          'Rocky Ridges',
          'Sparkling Skylands',
          'Palette Town',
          'Cloud Island',
        ],
        rarity: 'Rare',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Lots of nature',
      'Soft stuff',
      'Cute stuff',
      'Pretty flowers',
      'Colorful stuff',
      'Sour flavors',
    ],
    description:
        'A seed on its back bursts into bloom in warm sunlight. Loves group activities and sweet flavors.',
  },
  {
    slug: 'venusaur',
    dexNumber: 3,
    name: 'Venusaur',
    classification: 'Seed Pokémon',
    types: ['Grass', 'Poison'],
    height: '6\'07" (2m)',
    weight: '220.5 lbs (100 kg)',
    specialties: ['Grow', 'Litter'],
    idealHabitat: 'Bright',
    localHabitats: [
      {
        name: "Field of Flowers",
        locations: [
          'Withered Wastelands',
          'Bleak Beach',
          'Rocky Ridges',
          'Sparkling Skylands',
          'Palette Town',
          'Cloud Island',
        ],
        rarity: 'Rare',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
      {
        name: "Garden Terrace",
        locations: [
          'Withered Wastelands',
          'Bleak Beach',
          'Rocky Ridges',
          'Sparkling Skylands',
          'Palette Town',
          'Cloud Island',
        ],
        rarity: 'Rare',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Lots of nature',
      'Soft stuff',
      'Cute stuff',
      'Pretty flowers',
      'Luxury',
      'Sour flavors',
    ],
    description:
        'A seed on its back bursts into bloom in warm sunlight. Loves group activities and sweet flavors.',
  },
];

export function getPokemonBySlug(slug: string): Pokemon | undefined {
  return POKEMON.find((p) => p.slug === slug);
}

export function allIdealHabitats(): IdealHabitat[] {
  return Array.from(new Set(POKEMON.map((p) => p.idealHabitat))).sort() as IdealHabitat[];
}

export function allLocations(): string[] {
  return Array.from(new Set(POKEMON.flatMap((p) => p.localHabitats.flatMap((h) => h.locations)))).sort();
}

export function allTypes(): PokemonType[] {
  return Array.from(new Set(POKEMON.flatMap((p) => p.types))).sort() as PokemonType[];
}

export function allSpecialties(): Specialty[] {
  return Array.from(new Set(POKEMON.flatMap((p) => p.specialties))).sort() as Specialty[];
}

export function allRarities(): Rarity[] {
  const order: Rarity[] = ['Common', 'Uncommon', 'Rare', 'Very Rare'];
  const present = new Set(POKEMON.map((p) => p.localHabitats.flatMap((h) => h.rarity)).flat());
  return order.filter((r) => present.has(r));
}
