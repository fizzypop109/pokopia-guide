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

export interface Pokemon {
  slug: string;
  dexNumber: number;
  name: string;
  classification: string;
  types: PokemonType[];
  height: string;
  weight: string;
  specialty: Specialty;
  idealHabitat: IdealHabitat;
  localHabitats: string[];
  locations: string[];
  rarity: Rarity;
  availableTimes: TimeOfDay[];
  availableWeather: Weather[];
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
    specialty: 'Grow',
    idealHabitat: 'Bright',
    localHabitats: ['Tall Grass', 'Bench with greenery'],
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
    slug: 'charmander',
    dexNumber: 4,
    name: 'Charmander',
    classification: 'Lizard Pokémon',
    types: ['Fire'],
    height: '2\'00" (0.6m)',
    weight: '18.7 lbs (8.5 kg)',
    specialty: 'Burn',
    idealHabitat: 'Hot',
    localHabitats: ['Hearth', 'Sun-warmed Stone'],
    locations: ['Rocky Ridges', 'Withered Wastelands', 'Palette Town'],
    rarity: 'Uncommon',
    availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
    availableWeather: ['Sun', 'Cloud'],
    favorites: ['Warm spots', 'Spicy flavors', 'Adventure', 'Lots of fire'],
    description:
      'Tail flame strengthens with mood — never let it go out.',
  },
  {
    slug: 'squirtle',
    dexNumber: 7,
    name: 'Squirtle',
    classification: 'Tiny Turtle Pokémon',
    types: ['Water'],
    height: '1\'08" (0.5m)',
    weight: '19.8 lbs (9.0 kg)',
    specialty: 'Water',
    idealHabitat: 'Damp',
    localHabitats: ['Shoreline', 'Tide Pool'],
    locations: ['Bleak Beach', 'Palette Town', 'Cloud Island'],
    rarity: 'Uncommon',
    availableTimes: ['Morning', 'Day', 'Evening'],
    availableWeather: ['Sun', 'Cloud', 'Rain'],
    favorites: ['Lots of water', 'Cool spots', 'Bubbles', 'Shells'],
    description:
      'Hides in its shell when shy. Shoots water from its mouth.',
  },
  {
    slug: 'pikachu',
    dexNumber: 25,
    name: 'Pikachu',
    classification: 'Mouse Pokémon',
    types: ['Electric'],
    height: '1\'04" (0.4m)',
    weight: '13.2 lbs (6.0 kg)',
    specialty: 'Generate',
    idealHabitat: 'Bright',
    localHabitats: ['Tall Grass', 'Power Lines'],
    locations: ['Palette Town', 'Sparkling Skylands', 'Rocky Ridges'],
    rarity: 'Common',
    availableTimes: ['Morning', 'Day', 'Evening'],
    availableWeather: ['Sun', 'Cloud', 'Storm'],
    favorites: [
      'Cute stuff',
      'Sweet flavors',
      'Group activities',
      'Lots of electricity',
    ],
    description:
      'Cheerful and curious, sparks small lightning from its cheeks when excited.',
  },
  {
    slug: 'eevee',
    dexNumber: 133,
    name: 'Eevee',
    classification: 'Evolution Pokémon',
    types: ['Normal'],
    height: '1\'00" (0.3m)',
    weight: '14.3 lbs (6.5 kg)',
    specialty: 'Transform',
    idealHabitat: 'Bright',
    localHabitats: ['Cozy Nook', 'Town Square'],
    locations: ['Palette Town', 'Bleak Beach'],
    rarity: 'Rare',
    availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
    availableWeather: ['Sun', 'Cloud'],
    favorites: [
      'Cute stuff',
      'Soft stuff',
      'Group activities',
      'Sweet flavors',
    ],
    description: 'Unstable genes give it many evolution paths.',
  },
  {
    slug: 'oddish',
    dexNumber: 43,
    name: 'Oddish',
    classification: 'Weed Pokémon',
    types: ['Grass', 'Poison'],
    height: '1\'08" (0.5m)',
    weight: '11.9 lbs (5.4 kg)',
    specialty: 'Grow',
    idealHabitat: 'Dim',
    localHabitats: ['Tall Grass', 'Mossy Hollow'],
    locations: ['Withered Wastelands', 'Palette Town'],
    rarity: 'Common',
    availableTimes: ['Evening', 'Night'],
    availableWeather: ['Cloud', 'Rain'],
    favorites: ['Lots of nature', 'Moonlight', 'Damp soil'],
    description: 'Buries itself in cool soil during the day.',
  },
  {
    slug: 'machop',
    dexNumber: 66,
    name: 'Machop',
    classification: 'Superpower Pokémon',
    types: ['Fighting'],
    height: '2\'07" (0.8m)',
    weight: '43.0 lbs (19.5 kg)',
    specialty: 'Build',
    idealHabitat: 'Rocky',
    localHabitats: ['Boulder Field', 'Training Ground'],
    locations: ['Rocky Ridges', 'Withered Wastelands'],
    rarity: 'Uncommon',
    availableTimes: ['Morning', 'Day'],
    availableWeather: ['Sun', 'Cloud'],
    favorites: ['Heavy stuff', 'Group activities', 'Spicy flavors'],
    description: 'Trains every day to grow stronger muscles.',
  },
  {
    slug: 'psyduck',
    dexNumber: 54,
    name: 'Psyduck',
    classification: 'Duck Pokémon',
    types: ['Water'],
    height: '2\'07" (0.8m)',
    weight: '43.2 lbs (19.6 kg)',
    specialty: 'Yawn',
    idealHabitat: 'Damp',
    localHabitats: ['Pond', 'Riverside'],
    locations: ['Palette Town', 'Bleak Beach'],
    rarity: 'Uncommon',
    availableTimes: ['Day', 'Evening'],
    availableWeather: ['Cloud', 'Rain'],
    favorites: ['Quiet spots', 'Water', 'Soft stuff'],
    description: 'Constantly bewildered — yet unexpectedly clever.',
  },
  {
    slug: 'zubat',
    dexNumber: 41,
    name: 'Zubat',
    classification: 'Bat Pokémon',
    types: ['Poison', 'Flying'],
    height: '2\'07" (0.8m)',
    weight: '16.5 lbs (7.5 kg)',
    specialty: 'Search',
    idealHabitat: 'Dim',
    localHabitats: ['Cave Ceiling', 'Hollow Log'],
    locations: ['Rocky Ridges', 'Withered Wastelands'],
    rarity: 'Common',
    availableTimes: ['Evening', 'Night'],
    availableWeather: ['Cloud', 'Rain'],
    favorites: ['Dark spots', 'Group activities', 'Bug snacks'],
    description: 'Sleeps clinging to the ceiling — sensitive to bright light.',
  },
  {
    slug: 'geodude',
    dexNumber: 74,
    name: 'Geodude',
    classification: 'Rock Pokémon',
    types: ['Rock', 'Ground'],
    height: '1\'04" (0.4m)',
    weight: '44.1 lbs (20.0 kg)',
    specialty: 'Bulldoze',
    idealHabitat: 'Rocky',
    localHabitats: ['Boulder Field', 'Quarry'],
    locations: ['Rocky Ridges', 'Withered Wastelands'],
    rarity: 'Common',
    availableTimes: ['Morning', 'Day', 'Evening'],
    availableWeather: ['Sun', 'Cloud'],
    favorites: ['Hard stuff', 'Heavy stuff', 'Sturdy spots'],
    description: 'Easily mistaken for an ordinary rock until it moves.',
  },
  {
    slug: 'wingull',
    dexNumber: 278,
    name: 'Wingull',
    classification: 'Seagull Pokémon',
    types: ['Water', 'Flying'],
    height: '2\'00" (0.6m)',
    weight: '20.9 lbs (9.5 kg)',
    specialty: 'Fly',
    idealHabitat: 'Windy',
    localHabitats: ['Cliffside', 'Shoreline'],
    locations: ['Bleak Beach', 'Sparkling Skylands', 'Cloud Island'],
    rarity: 'Common',
    availableTimes: ['Morning', 'Day'],
    availableWeather: ['Sun', 'Cloud', 'Rain'],
    favorites: ['Sea breezes', 'Open skies', 'Salty flavors'],
    description: 'Glides on sea breezes for hours without flapping.',
  },
  {
    slug: 'sunkern',
    dexNumber: 191,
    name: 'Sunkern',
    classification: 'Seed Pokémon',
    types: ['Grass'],
    height: '1\'00" (0.3m)',
    weight: '4.0 lbs (1.8 kg)',
    specialty: 'Grow',
    idealHabitat: 'Bright',
    localHabitats: ['Tall Grass', 'Sunny Patch'],
    locations: ['Palette Town', 'Sparkling Skylands'],
    rarity: 'Common',
    availableTimes: ['Morning', 'Day'],
    availableWeather: ['Sun'],
    favorites: ['Sunlight', 'Lots of nature', 'Sweet flavors'],
    description: 'Drops from trees in the morning — moves only when warm.',
  },
];

export function getPokemonBySlug(slug: string): Pokemon | undefined {
  return POKEMON.find((p) => p.slug === slug);
}

export function allIdealHabitats(): IdealHabitat[] {
  return Array.from(new Set(POKEMON.map((p) => p.idealHabitat))).sort() as IdealHabitat[];
}

export function allLocations(): string[] {
  return Array.from(new Set(POKEMON.flatMap((p) => p.locations))).sort();
}

export function allTypes(): PokemonType[] {
  return Array.from(new Set(POKEMON.flatMap((p) => p.types))).sort() as PokemonType[];
}

export function allSpecialties(): Specialty[] {
  return Array.from(new Set(POKEMON.map((p) => p.specialty))).sort() as Specialty[];
}

export function allRarities(): Rarity[] {
  const order: Rarity[] = ['Common', 'Uncommon', 'Rare', 'Very Rare'];
  const present = new Set(POKEMON.map((p) => p.rarity));
  return order.filter((r) => present.has(r));
}
