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
    | 'Warm'
    | 'Humid'
  | 'Dim'
  | 'Damp'
  | 'Dry'
  | 'Dark'
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

export type LocationName =
  | 'Withered Wastelands'
  | 'Bleak Beach'
  | 'Rocky Ridges'
  | 'Sparkling Skylands'
  | 'Palette Town'
  | 'Cloud Island';

export const LOCATIONS: LocationName[] = [
  'Withered Wastelands',
  'Bleak Beach',
  'Rocky Ridges',
  'Sparkling Skylands',
  'Palette Town',
  'Cloud Island',
];

/**
 * Habitats can be built in any location. `locations` is where you must build
 * this habitat to attract the Pokémon: `'any'` means any location works, while
 * a list means the Pokémon only appears when the habitat is built there.
 */
export type HabitatLocations = LocationName[] | 'any';

export type Habitat = {
  name: string;
  locations: HabitatLocations;
  rarity: Rarity;
  availableTimes: TimeOfDay[];
  availableWeather: Weather[];
}

export function resolveLocations(locations: HabitatLocations): LocationName[] {
  return locations === 'any' ? LOCATIONS : locations;
}

export function isAnyLocation(locations: HabitatLocations): boolean {
  return locations === 'any' || locations.length === LOCATIONS.length;
}

export function habitatHasLocation(
  locations: HabitatLocations,
  location: string,
): boolean {
  return locations === 'any' || (locations as string[]).includes(location);
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
  description?: string;
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
        locations: 'any',
        rarity: 'Common',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
      {
        name: "Bench with greenery",
        locations: 'any',
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
        locations: 'any',
        rarity: 'Rare',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
      {
        name: "Bench with greenery",
        locations: 'any',
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
        locations: 'any',
        rarity: 'Rare',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
      {
        name: "Garden Terrace",
        locations: 'any',
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
  },
  {
    slug: 'charmander',
    dexNumber: 4,
    name: 'Charmander',
    classification: 'Lizard Pokémon',
    types: ['Fire'],
    height: '2\'00" (0.6m)',
    weight: '18.7lbs (8.5 kg)',
    specialties: ['Burn'],
    idealHabitat: 'Warm',
    localHabitats: [
      {
        name: "Tall Grass",
        locations: 'any',
        rarity: 'Common',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Lots of nature',
      'Wooden stuff',
      'Hard stuff',
      'Exercise',
      'Group Activities',
      'Spicy flavors',
    ],
    description:
        'If Charmander is healthy, the flame on the tip of its tail will burn vigorously and won\'t go out even if it gets a bit wet.',
  },
  {
    slug: 'charmeleon',
    dexNumber: 5,
    name: 'Charmeleon',
    classification: 'Flame Pokémon',
    types: ['Fire'],
    height: '3\'07" (1.1m)',
    weight: '41.9lbs (19 kg)',
    specialties: ['Burn'],
    idealHabitat: 'Warm',
    localHabitats: [
      {
        name: "Campsite",
        locations: 'any',
        rarity: 'Common',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Lots of fire',
      'Wooden stuff',
      'Hard stuff',
      'Exercise',
      'Rides',
      'Spicy flavors',
    ],
  },
  {
    slug: 'charizard',
    dexNumber: 6,
    name: 'Charizard',
    classification: 'Flame Pokémon',
    types: ['Fire', 'Flying'],
    height: '5\'07" (1.7m)',
    weight: '199.5lbs (90.5 kg)',
    specialties: ['Burn', 'Fly'],
    idealHabitat: 'Warm',
    localHabitats: [
      {
        name: "Tall Grass",
        locations: 'any',
        rarity: 'Very Rare',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud'],
      },
      {
        name: "Berry-feast Campsite",
        locations: 'any',
        rarity: 'Rare',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud'],
      },
    ],
    favorites: [
      'Lots of fire',
      'Nice breezes',
      'Wooden stuff',
      'Exercise',
      'Luxury',
      'Spicy flavors',
    ],
  },
  {
    slug: 'squirtle',
    dexNumber: 7,
    name: 'Squirtle',
    classification: 'Tiny Turtle Pokémon',
    types: ['Water'],
    height: '1\'08" (0.5m)',
    weight: '19.8lbs (9 kg)',
    specialties: ['Water'],
    idealHabitat: 'Humid',
    localHabitats: [
      {
        name: "Tall Grass",
        locations: 'any',
        rarity: 'Common',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
      {
        name: "Hydrated tall grass",
        locations: 'any',
        rarity: 'Common',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Lots of water',
      'Cleanliness',
      'Healing',
      'Cute stuff',
      'Group Activities',
      'Sweet flavors',
    ],
  },
  {
    slug: 'wartortle',
    dexNumber: 8,
    name: 'Wartortle',
    classification: 'Turtle Pokémon',
    types: ['Water'],
    height: '3\'03" (1m)',
    weight: '49.6lbs (22.5 kg)',
    specialties: ['Water'],
    idealHabitat: 'Humid',
    localHabitats: [
      {
        name: "Hydrated tall grass",
        locations: 'any',
        rarity: 'Rare',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Lots of water',
      'Cleanliness',
      'Healing',
      'Exercise',
      'Hard stuff',
      'Spicy flavors',
    ],
  },
  {
    slug: 'blastoise',
    dexNumber: 9,
    name: 'Blastoise',
    classification: 'Shellfish Pokémon',
    types: ['Water'],
    height: '5\'03" (1.6m)',
    weight: '188.5lbs (85.5 kg)',
    specialties: ['Water', 'Trade'],
    idealHabitat: 'Humid',
    localHabitats: [
      {
        name: "Hydrated tall grass",
        locations: 'any',
        rarity: 'Very Rare',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
      {
        name: "Floating in the shade",
        locations: 'any',
        rarity: 'Rare',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Lots of water',
      'Cleanliness',
      'Healing',
      'Exercise',
      'Luxury',
      'Sour flavors',
    ],
  },
  {
    slug: 'pidgey',
    dexNumber: 10,
    name: 'Pidgey',
    classification: 'Tiny Bird Pokémon',
    types: ['Normal', 'Flying'],
    height: '1\'00" (0.3m)',
    weight: '4.0lbs (1.8 kg)',
    specialties: ['Fly', 'Search'],
    idealHabitat: 'Bright',
    localHabitats: [
      {
        name: "Elevated tall grass",
        locations: 'any',
        rarity: 'Common',
        availableTimes: ['Morning', 'Day', 'Evening'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
      {
        name: "Pretty flower bed",
        locations: 'any',
        rarity: 'Common',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Soft stuff',
      'Nice breezes',
      'Watching stuff',
      'Lots of nature',
      'Play spaces',
      'Sour flavors',
    ],
    description: "Very docile. If attacked, it will often kick up sand to protect itself rather than fight back."
  },
  {
    slug: 'pidgeotto',
    dexNumber: 11,
    name: 'Pidgeotto',
    classification: 'Bird Pokémon',
    types: ['Normal', 'Flying'],
    height: '3\'07" (1.1m)',
    weight: '66.1lbs (30.0 kg)',
    specialties: ['Fly', 'Search'],
    idealHabitat: 'Bright',
    localHabitats: [
      {
        name: "Elevated tall grass",
        locations: 'any',
        rarity: 'Rare',
        availableTimes: ['Morning', 'Day', 'Evening'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
      {
        name: "Pretty flower bed",
        locations: 'any',
        rarity: 'Rare',
        availableTimes: ['Morning', 'Day', 'Evening'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Soft stuff',
      'Nice breezes',
      'Watching stuff',
      'Lots of nature',
      'Looks like food',
      'Spicy flavors',
    ],
  },
  {
    slug: 'pidgeot',
    dexNumber: 12,
    name: 'Pidgeot',
    classification: 'Bird Pokémon',
    types: ['Normal', 'Flying'],
    height: '4\'11" (1.5m)',
    weight: '87.1lbs (39.5 kg)',
    specialties: ['Fly', 'Chop'],
    idealHabitat: 'Bright',
    localHabitats: [
      {
        name: "Luxury chirp-chirp meal",
        locations: 'any',
        rarity: 'Common',
        availableTimes: ['Morning', 'Day', 'Evening'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Soft stuff',
      'Nice breezes',
      'Wooden stuff',
      'Lots of nature',
      'Luxury',
      'Sour flavors',
    ],
  },
  {
    slug: 'oddish',
    dexNumber: 13,
    name: 'Oddish',
    classification: 'Weed Pokémon',
    types: ['Grass', 'Poison'],
    height: '1\'08" (0.5m)',
    weight: '11.9lbs (5.4 kg)',
    specialties: ['Grow'],
    idealHabitat: 'Humid',
    localHabitats: [
      {
        name: "Tall Grass",
        locations: 'any',
        rarity: 'Common',
        availableTimes: ['Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Lots of nature',
      'Lots of dirt',
      'Soft stuff',
      'Pretty flowers',
      'Lots of water',
      'Bitter flavors',
    ],
  },
  {
    slug: 'gloom',
    dexNumber: 14,
    name: 'Gloom',
    classification: 'Weed Pokémon',
    types: ['Grass', 'Poison'],
    height: '2\'07" (0.8m)',
    weight: '19.0lbs (8.6 kg)',
    specialties: ['Grow'],
    idealHabitat: 'Humid',
    localHabitats: [
      {
        name: "Tropical vibes",
        locations: 'any',
        rarity: 'Common',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Lots of nature',
      'Lots of dirt',
      'Soft stuff',
      'Pretty flowers',
      'Garbage',
      'Dry flavors',
    ],
  },
  {
    slug: 'vileplume',
    dexNumber: 15,
    name: 'Vileplume',
    classification: 'Flower Pokémon',
    types: ['Grass', 'Poison'],
    height: '3\'11" (1.2m)',
    weight: '41.0lbs (18.6 kg)',
    specialties: ['Grow', 'Litter'],
    idealHabitat: 'Humid',
    localHabitats: [
      {
        name: "Chansey Resting area",
        locations: 'any',
        rarity: 'Rare',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Lots of nature',
      'Lots of dirt',
      'Soft stuff',
      'Pretty flowers',
      'Colorful stuff',
      'Bitter flavors',
    ],
  },
  {
    slug: 'bellossom',
    dexNumber: 16,
    name: 'Bellossom',
    classification: 'Flower Pokémon',
    types: ['Grass'],
    height: '1\'04" (0.4m)',
    weight: '12.8lbs (5.8 kg)',
    specialties: ['Grow', 'Hype'],
    idealHabitat: 'Bright',
    localHabitats: [
      {
        name: "Chansey Resting area",
        locations: 'any',
        rarity: 'Rare',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Lots of nature',
      'Pretty flowers',
      'Play spaces',
      'Cute stuff',
      'Noisy stuff',
      'Sour flavors',
    ],
  },
  {
    slug: 'paras',
    dexNumber: 17,
    name: 'Paras',
    classification: 'Mushroom Pokémon',
    types: ['Bug', 'Grass'],
    height: '1\'00" (0.3m)',
    weight: '11.9lbs (5.4 kg)',
    specialties: ['Search'],
    idealHabitat: 'Humid',
    localHabitats: [
      {
        name: "Elevated flower bed",
        locations: 'any',
        rarity: 'Common',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
      {
        name: "Flower garden",
        locations: 'any',
        rarity: 'Common',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Lots of nature',
      'Wooden stuff',
      'Watching stuff',
      'Lots of dirt',
      'Looks like food',
      'Bitter flavors',
    ],
  },
  {
    slug: 'parasect',
    dexNumber: 18,
    name: 'Parasect',
    classification: 'Mushroom Pokémon',
    types: ['Bug', 'Grass'],
    height: '1\'00" (0.3m)',
    weight: '65.0lbs (29.5 kg)',
    specialties: ['Search'],
    idealHabitat: 'Humid',
    localHabitats: [
      {
        name: "Elevated flower bed",
        locations: 'any',
        rarity: 'Rare',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
      {
        name: "Flower garden",
        locations: 'any',
        rarity: 'Rare',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Lots of nature',
      'Wooden stuff',
      'Watching stuff',
      'Lots of dirt',
      'Strange stuff',
      'Bitter flavors',
    ],
  },
  {
    slug: 'venonat',
    dexNumber: 19,
    name: 'Venonat',
    classification: 'Insect Pokémon',
    types: ['Bug', 'Poison'],
    height: '3\'03" (1.0m)',
    weight: '66.1lbs (30 kg)',
    specialties: ['Search'],
    idealHabitat: 'Bright',
    localHabitats: [
      {
        name: "Illuminated tall grass",
        locations: 'any',
        rarity: 'Common',
        availableTimes: ['Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
      {
        name: "Illuminated bench",
        locations: 'any',
        rarity: 'Common',
        availableTimes: ['Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Lots of nature',
      'Wooden stuff',
      'Watching stuff',
      'Complicated stuff',
      'Letters and words',
      'Bitter flavors',
    ],
  },
  {
    slug: 'venomoth',
    dexNumber: 20,
    name: 'Venomoth',
    classification: 'Poison Moth Pokémon',
    types: ['Bug', 'Poison'],
    height: '4\'11" (1.5m)',
    weight: '27.6lbs (12.5 kg)',
    specialties: ['Search'],
    idealHabitat: 'Bright',
    localHabitats: [
      {
        name: "Illuminated tall grass",
        locations: 'any',
        rarity: 'Rare',
        availableTimes: ['Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
      {
        name: "Illuminated bench",
        locations: 'any',
        rarity: 'Rare',
        availableTimes: ['Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Lots of nature',
      'Wooden stuff',
      'Watching stuff',
      'Nice breezes',
      'Pretty flowers',
      'Bitter flavors',
    ],
  },
  {
    slug: 'bellsprout',
    dexNumber: 21,
    name: 'Bellsprout',
    classification: 'Poison Moth Pokémon',
    types: ['Grass', 'Poison'],
    height: '2\'04" (0.7m)',
    weight: '8.8lbs (4 kg)',
    specialties: ['Grow', 'Litter'],
    idealHabitat: 'Humid',
    localHabitats: [
      {
        name: "Tree-shaded tall grass",
        locations: 'any',
        rarity: 'Common',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Lots of nature',
      'Wooden stuff',
      'Lots of dirt',
      'Lots of water',
      'Pretty flowers',
      'Dry flavors',
    ],
  },
  {
    slug: 'weepinbell',
    dexNumber: 22,
    name: 'Weeipinbell',
    classification: 'Flycatcher Pokémon',
    types: ['Grass', 'Poison'],
    height: '3\'03" (1.0m)',
    weight: '14.1lbs (6.4 kg)',
    specialties: ['Grow', 'Litter'],
    idealHabitat: 'Humid',
    localHabitats: [
      {
        name: "Flowery table",
        locations: 'any',
        rarity: 'Rare',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
      {
        name: "Irresistible scent and glow",
        locations: 'any',
        rarity: 'Common',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Lots of nature',
      'Wooden stuff',
      'Lots of dirt',
      'Colorful stuff',
      'Pretty flowers',
      'Bitter flavors',
    ],
  },
  {
    slug: 'victreebel',
    dexNumber: 23,
    name: 'Victreebel',
    classification: 'Flycatcher Pokémon',
    types: ['Grass', 'Poison'],
    height: '5\'07" (1.7m)',
    weight: '34.2lbs (15.5 kg)',
    specialties: ['Grow', 'Chop'],
    idealHabitat: 'Humid',
    localHabitats: [
      {
        name: "Flowery table",
        locations: 'any',
        rarity: 'Very Rare',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
      {
        name: "Irresistible scent and glow",
        locations: 'any',
        rarity: 'Rare',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Lots of nature',
      'Wooden stuff',
      'Lots of dirt',
      'Colorful stuff',
      'Pretty flowers',
      'Bitter flavors',
    ],
  },
  {
    slug: 'slowpoke',
    dexNumber: 24,
    name: 'Slowpoke',
    classification: 'Dopey Pokémon',
    types: ['Water', 'Psychic'],
    height: '3\'11" (1.2m)',
    weight: '79.4lbs (36 kg)',
    specialties: ['Water', 'Yawn'],
    idealHabitat: 'Humid',
    localHabitats: [
      {
        name: "Seaside Tall Grass",
        locations: 'any',
        rarity: 'Common',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Lots of water',
      'Cleanliness',
      'Strange stuff',
      'Soft stuff',
      'Healing',
      'Dry flavors',
    ],
  },
  {
    slug: 'slowbro',
    dexNumber: 25,
    name: 'Slowbro',
    classification: 'Hermit Crab Pokémon',
    types: ['Water', 'Psychic'],
    height: '5\'03" (1.6m)',
    weight: '173.1lbs (78.5 kg)',
    specialties: ['Water', 'Trade'],
    idealHabitat: 'Humid',
    localHabitats: [
      {
        name: "Seaside Tall Grass",
        locations: 'any',
        rarity: 'Very Rare',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
      {
        name: "Bed with a plush",
        locations: 'any',
        rarity: 'Rare',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Lots of water',
      'Cleanliness',
      'Strange stuff',
      'Group Activities',
      'Healing',
      'Dry flavors',
    ],
  },
  {
    slug: 'slowking',
    dexNumber: 26,
    name: 'Slowking',
    classification: 'Royal Pokémon',
    types: ['Water', 'Psychic'],
    height: '6\'07" (2.0m)',
    weight: '175.3lbs (79.5 kg)',
    specialties: ['Water', 'Teleport'],
    idealHabitat: 'Humid',
    localHabitats: [
      {
        name: "Seaside Tall Grass",
        locations: 'any',
        rarity: 'Very Rare',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
      {
        name: "Bed with a plush",
        locations: 'any',
        rarity: 'Rare',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
      {
        name: "Fishing pond",
        locations: 'any',
        rarity: 'Rare',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Lots of water',
      'Cleanliness',
      'Strange stuff',
      'Group Activities',
      'Healing',
      'Sour flavors',
    ],
  },
  {
    slug: 'magnemite',
    dexNumber: 27,
    name: 'Magnemite',
    classification: 'Magnet Pokémon',
    types: ['Electric', 'Steel'],
    height: '1\'00" (0.3m)',
    weight: '13.2lbs (6 kg)',
    specialties: ['Generate'],
    idealHabitat: 'Bright',
    localHabitats: [
      {
        name: "Factory Storage",
        locations: 'any',
        rarity: 'Common',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Electronics',
      'Metal stuff',
      'Shiny stuff',
      'Hard stuff',
      'Group Activities',
      'Bitter flavors',
    ],
  },
  {
    slug: 'magneton',
    dexNumber: 28,
    name: 'Magneton',
    classification: 'Magnet Pokémon',
    types: ['Electric', 'Steel'],
    height: '3\'03" (1m)',
    weight: '132.3lbs (60kg)',
    specialties: ['Generate'],
    idealHabitat: 'Bright',
    localHabitats: [
      {
        name: 'Trash can central',
        locations: 'any',
        rarity: 'Rare',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
      {
        name: 'Mini Game Corner',
        locations: 'any',
        rarity: 'Common',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Electronics',
      'Metal stuff',
      'Shiny stuff',
      'Gatherings',
      'Group Activities',
      'Bitter flavors',
    ],
  },
  {
    slug: 'magnezone',
    dexNumber: 29,
    name: 'Magnezone',
    classification: 'Magnet Area Pokémon',
    types: ['Electric', 'Steel'],
    height: '3\'11" (1.2m)',
    weight: '396.8lbs (180kg)',
    specialties: ['Generate', 'Recycle'],
    idealHabitat: 'Bright',
    localHabitats: [
      {
        name: 'Trash can central',
        locations: 'any',
        rarity: 'Very Rare',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
      {
        name: 'Mini Game Corner',
        locations: 'any',
        rarity: 'Rare',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Electronics',
      'Metal stuff',
      'Luxury',
      'Gatherings',
      'Hard stuff',
      'Bitter flavors',
    ],
  },
  {
    slug: 'onix',
    dexNumber: 30,
    name: 'Onix',
    classification: 'Rock Snake Pokémon',
    types: ['Rock', 'Ground'],
    height: '28\'10" (8.8m)',
    weight: '463.0lbs (210kg)',
    specialties: ['Crush', 'Bulldoze'],
    idealHabitat: 'Dry',
    localHabitats: [
      {
        name: 'Smooth tall grass',
        locations: 'any',
        rarity: 'Common',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Stone stuff',
      'Lots of dirt',
      'Blocky stuff',
      'Slender objects',
      'Exercise',
      'Dry flavors',
    ],
  },
  {
    slug: 'steelix',
    dexNumber: 31,
    name: 'Steelix',
    classification: 'Iron Snake Pokémon',
    types: ['Steel', 'Ground'],
    height: '30\'02" (9.2m)',
    weight: '881.8lbs (400kg)',
    specialties: ['Crush', 'Bulldoze'],
    idealHabitat: 'Dry',
    localHabitats: [
      {
        name: 'Clink-clang iron construction',
        locations: 'any',
        rarity: 'Common',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Metal stuff',
      'Lots of dirt',
      'Stone stuff',
      'Slender objects',
      'Hard stuff',
      'Sour flavors',
    ],
  },
  {
    slug: 'cubone',
    dexNumber: 32,
    name: 'Cubone',
    classification: 'Lonely Pokémon',
    types: ['Ground'],
    height: '1\'04" (0.4m)',
    weight: '14.3lbs (6.5kg)',
    specialties: ['Build'],
    idealHabitat: 'Dry',
    localHabitats: [
      {
        name: 'Grave with flowers',
        locations: 'any',
        rarity: 'Common',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Lots of dirt',
      'Construction',
      'Exercise',
      'Slender objects',
      'Group Activities',
      'Bitter flavors',
    ],
  },
  {
    slug: 'marowak',
    dexNumber: 33,
    name: 'Marowak',
    classification: 'Bone Keeper Pokémon',
    types: ['Ground'],
    height: '3\'03" (1m)',
    weight: '99.2lbs (45kg)',
    specialties: ['Build'],
    idealHabitat: 'Dry',
    localHabitats: [
      {
        name: 'Grave with flowers',
        locations: 'any',
        rarity: 'Rare',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Lots of dirt',
      'Construction',
      'Exercise',
      'Slender objects',
      'Luxury',
      'Dry flavors',
    ],
  },
  {
    slug: 'tyrogue',
    dexNumber: 34,
    name: 'Tyrogue',
    classification: 'Scuffle Pokémon',
    types: ['Fighting'],
    height: '2\'04" (0.7m)',
    weight: '46.3lbs (21kg)',
    specialties: ['Trade'],
    idealHabitat: 'Bright',
    localHabitats: [
      {
        name: 'Training waterfall',
        locations: 'any',
        rarity: 'Common',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Exercise',
      'Group Activities',
      'Fabric',
      'Stone stuff',
      'Round stuff',
      'Spicy flavors',
    ],
  },
  {
    slug: 'hitmonlee',
    dexNumber: 35,
    name: 'Hitmonlee',
    classification: 'Kicking Pokémon',
    types: ['Fighting'],
    height: '4\'11" (1.5m)',
    weight: '109.8lbs (49.8kg)',
    specialties: ['Trade'],
    idealHabitat: 'Bright',
    localHabitats: [
      {
        name: 'Urgent Care',
        locations: 'any',
        rarity: 'Common',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Exercise',
      'Group Activities',
      'Fabric',
      'Stone stuff',
      'Round stuff',
      'Spicy flavors',
    ],
  },
  {
    slug: 'hitmonchan',
    dexNumber: 36,
    name: 'Hitmonchan',
    classification: 'Punching Pokémon',
    types: ['Fighting'],
    height: '4\'07" (1.4m)',
    weight: '110.7lbs (50.2kg)',
    specialties: ['Trade'],
    idealHabitat: 'Bright',
    localHabitats: [
      {
        name: 'Exercise resting spot',
        locations: 'any',
        rarity: 'Common',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Exercise',
      'Group Activities',
      'Fabric',
      'Stone stuff',
      'Round stuff',
      'Sweet flavors',
    ],
    description:
      'It corners its foes with combo punches from both sides, then finishes them off with a single straight punch launched at over 300 mph.',
  },
  {
    slug: 'hitmontop',
    dexNumber: 37,
    name: 'Hitmontop',
    classification: 'Handstand Pokémon',
    types: ['Fighting'],
    height: '4\'07" (1.4m)',
    weight: '105.8lbs (48kg)',
    specialties: ['Trade'],
    idealHabitat: 'Bright',
    localHabitats: [
      {
        name: 'Gym first aid',
        locations: 'any',
        rarity: 'Common',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Exercise',
      'Group Activities',
      'Fabric',
      'Stone stuff',
      'Round stuff',
      'Sweet flavors',
    ],
  },
  {
    slug: 'koffing',
    dexNumber: 38,
    name: 'Koffing',
    classification: 'Poison Gas Pokémon',
    types: ['Poison'],
    height: '2\'00" (0.6m)',
    weight: '2.2lbs (1kg)',
    specialties: ['Recycle'],
    idealHabitat: 'Dark',
    localHabitats: [
      {
        name: 'Trash collection site',
        locations: ['Palette Town', 'Cloud Island'],
        rarity: 'Common',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Garbage',
      'Gatherings',
      'Complicated stuff',
      'Soft stuff',
      'Wobbly stuff',
      'Bitter flavors',
    ],
  },
  {
    slug: 'weezing',
    dexNumber: 39,
    name: 'Weezing',
    classification: 'Poison Gas Pokémon',
    types: ['Poison'],
    height: '3\'11" (1.2m)',
    weight: '20.9lbs (9.5kg)',
    specialties: ['Recycle'],
    idealHabitat: 'Dark',
    localHabitats: [
      {
        name: 'Good old-fashioned antiques',
        locations: ['Palette Town', 'Cloud Island'],
        rarity: 'Common',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
      {
        name: 'Trash collection site',
        locations: ['Palette Town', 'Cloud Island'],
        rarity: 'Rare',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Garbage',
      'Gatherings',
      'Complicated stuff',
      'Soft stuff',
      'Wobbly stuff',
      'Bitter flavors',
    ],
  },
  {
    slug: 'tangela',
    dexNumber: 40,
    name: 'Tangela',
    classification: 'Vine Pokémon',
    types: ['Grass'],
    height: '3\'03" (1m)',
    weight: '77.2lbs (35kg)',
    specialties: ['Grow', 'Litter'],
    idealHabitat: 'Bright',
    localHabitats: [
      {
        name: "Nothin' but Poke Balls",
        locations: ['Palette Town', 'Cloud Island'],
        rarity: 'Common',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Lots of nature',
      'Lots of water',
      'Gatherings',
      'Pretty flowers',
      'Slender objects',
      'Sour flavors',
    ],
  },
  {
    slug: 'tangrowth',
    dexNumber: 41,
    name: 'Tangrowth',
    classification: 'Vine Pokémon',
    types: ['Grass'],
    height: '6\'07" (2m)',
    weight: '283.5lbs (128.6kg)',
    specialties: ['Grow', 'Litter'],
    idealHabitat: 'Humid',
    localHabitats: [
      {
        name: 'Bench with greenery',
        locations: ['Cloud Island'],
        rarity: 'Common',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Lots of nature',
      'Lots of water',
      'Gatherings',
      'Pretty flowers',
      'Watching stuff',
      'Bitter flavors',
    ],
  },
  {
    slug: 'scyther',
    dexNumber: 42,
    name: 'Scyther',
    classification: 'Mantis Pokémon',
    types: ['Bug', 'Flying'],
    height: '4\'11" (1.5m)',
    weight: '123.5lbs (56kg)',
    specialties: ['Chop'],
    idealHabitat: 'Bright',
    localHabitats: [
      {
        name: 'Tree-shaded tall grass',
        locations: 'any',
        rarity: 'Common',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Lots of nature',
      'Nice breezes',
      'Wooden stuff',
      'Sharp stuff',
      'Exercise',
      'Spicy flavors',
    ],
    description:
      'The sharp scythes on its forearms become increasingly sharp by cutting through hard objects.',
  },
  {
    slug: 'scizor',
    dexNumber: 43,
    name: 'Scizor',
    classification: 'Pincer Pokémon',
    types: ['Bug', 'Steel'],
    height: '5\'11" (1.8m)',
    weight: '260.1lbs (118kg)',
    specialties: ['Chop'],
    idealHabitat: 'Bright',
    localHabitats: [
      {
        name: 'Tree-shaded tall grass',
        locations: ['Palette Town', 'Cloud Island'],
        rarity: 'Common',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Lots of nature',
      'Metal stuff',
      'Wooden stuff',
      'Hard stuff',
      'Exercise',
      'Bitter flavors',
    ],
  },
  {
    slug: 'pinsir',
    dexNumber: 44,
    name: 'Pinsir',
    classification: 'Stagbeetle Pokémon',
    types: ['Bug'],
    height: '4\'11" (1.5m)',
    weight: '121.3lbs (55kg)',
    specialties: ['Chop', 'Build'],
    idealHabitat: 'Bright',
    localHabitats: [
      {
        name: 'Tree-shaded tall grass',
        locations: 'any',
        rarity: 'Rare',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Lots of nature',
      'Wooden stuff',
      'Pretty flowers',
      'Sharp stuff',
      'Exercise',
      'Spicy flavors',
    ],
  },
  {
    slug: 'magikarp',
    dexNumber: 45,
    name: 'Magikarp',
    classification: 'Fish Pokémon',
    types: ['Water'],
    height: '2\'11" (0.9m)',
    weight: '22.0lbs (10kg)',
    specialties: [],
    idealHabitat: 'Humid',
    localHabitats: [
      {
        name: 'Ocean fishing spot',
        locations: 'any',
        rarity: 'Common',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Lots of water',
      'Ocean vibes',
      'Group Activities',
      'Rides',
      'Wobbly stuff',
      'Sweet flavors',
    ],
  },
  {
    slug: 'gyarados',
    dexNumber: 46,
    name: 'Gyarados',
    classification: 'Atrocious Pokémon',
    types: ['Water', 'Flying'],
    height: '21\'04" (6.5m)',
    weight: '518.1lbs (235kg)',
    specialties: ['Water'],
    idealHabitat: 'Humid',
    localHabitats: [
      {
        name: 'Illuminated Waterfall',
        locations: ['Sparkling Skylands', 'Cloud Island'],
        rarity: 'Common',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Lots of water',
      'Ocean vibes',
      'Nice breezes',
      'Cleanliness',
      'Slender objects',
      'Spicy flavors',
    ],
  },
  {
    slug: 'ditto',
    dexNumber: 47,
    name: 'Ditto',
    classification: 'Transform Pokémon',
    types: ['Normal'],
    height: '1\'00" (0.3m)',
    weight: '8.8lbs (4kg)',
    specialties: ['Transform'],
    idealHabitat: 'Bright',
    localHabitats: [],
    favorites: [],
  },
  {
    slug: 'hoothoot',
    dexNumber: 48,
    name: 'Hoothoot',
    classification: 'Owl Pokémon',
    types: ['Normal', 'Flying'],
    height: '2\'04" (0.7m)',
    weight: '46.7lbs (21.2kg)',
    specialties: ['Trade', 'Fly'],
    idealHabitat: 'Dark',
    localHabitats: [
      {
        name: 'Elevated tall grass',
        locations: 'any',
        rarity: 'Common',
        availableTimes: ['Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
      {
        name: 'Pretty flower bed',
        locations: 'any',
        rarity: 'Common',
        availableTimes: ['Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
      {
        name: 'Gently lit bed',
        locations: 'any',
        rarity: 'Common',
        availableTimes: ['Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Soft stuff',
      'Nice breezes',
      'Fabric',
      'Wobbly stuff',
      'Watching stuff',
      'Dry flavors',
    ],
  },
  {
    slug: 'noctowl',
    dexNumber: 49,
    name: 'Noctowl',
    classification: 'Owl Pokémon',
    types: ['Normal', 'Flying'],
    height: '5\'03" (1.6m)',
    weight: '89.9lbs (40.8kg)',
    specialties: ['Trade', 'Fly'],
    idealHabitat: 'Dark',
    localHabitats: [
      {
        name: 'Elevated tall grass',
        locations: 'any',
        rarity: 'Rare',
        availableTimes: ['Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
      {
        name: 'Gently lit bed',
        locations: 'any',
        rarity: 'Rare',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Soft stuff',
      'Nice breezes',
      'Letters and words',
      'Containers',
      'Watching stuff',
      'Dry flavors',
    ],
  },
  {
    slug: 'heracross',
    dexNumber: 50,
    name: 'Heracross',
    classification: 'Singlehorn Pokémon',
    types: ['Bug', 'Fighting'],
    height: '4\'11" (1.5m)',
    weight: '119.0lbs (54kg)',
    specialties: ['Chop', 'Build'],
    idealHabitat: 'Bright',
    localHabitats: [
      {
        name: 'Tree-shaded tall grass',
        locations: 'any',
        rarity: 'Rare',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Lots of nature',
      'Wooden stuff',
      'Pretty flowers',
      'Looks like food',
      'Exercise',
      'Sweet flavors',
    ],
  },
  {
    slug: 'volbeat',
    dexNumber: 51,
    name: 'Volbeat',
    classification: 'Firefly Pokémon',
    types: ['Bug'],
    height: '2\'04" (0.7m)',
    weight: '39.0lbs (17.7kg)',
    specialties: ['Hype'],
    idealHabitat: 'Dark',
    localHabitats: [
      {
        name: 'Hydrated flower bed',
        locations: 'any',
        rarity: 'Rare',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Lots of nature',
      'Wooden stuff',
      'Shiny stuff',
      'Cute stuff',
      'Group Activities',
      'Sweet flavors',
    ],
  },
  {
    slug: 'illumise',
    dexNumber: 52,
    name: 'Illumise',
    classification: 'Firefly Pokémon',
    types: ['Bug'],
    height: '2\'00" (0.6m)',
    weight: '39.0lbs (17.7kg)',
    specialties: ['Hype'],
    idealHabitat: 'Dark',
    localHabitats: [
      {
        name: 'Hydrated flower bed',
        locations: 'any',
        rarity: 'Rare',
        availableTimes: ['Morning', 'Day', 'Evening', 'Night'],
        availableWeather: ['Sun', 'Cloud', 'Rain'],
      },
    ],
    favorites: [
      'Lots of nature',
      'Wooden stuff',
      'Shiny stuff',
      'Cute stuff',
      'Group Activities',
      'Sour flavors',
    ],
  },
];

export function getPokemonBySlug(slug: string): Pokemon | undefined {
  return POKEMON.find((p) => p.slug === slug);
}

export function allIdealHabitats(): IdealHabitat[] {
  return Array.from(new Set(POKEMON.map((p) => p.idealHabitat))).sort() as IdealHabitat[];
}

export function allLocations(): LocationName[] {
  return [...LOCATIONS].sort();
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

export function habitatSlug(name: string): string {
  return name.toLowerCase().replace(/\s/g, '-');
}

export type HabitatResident = {
  pokemon: Pokemon;
  rarity: Rarity;
  availableTimes: TimeOfDay[];
  availableWeather: Weather[];
  locations: HabitatLocations;
};

export type AggregatedHabitat = {
  name: string;
  slug: string;
  types: PokemonType[];
  locations: LocationName[];
  availableTimes: TimeOfDay[];
  availableWeather: Weather[];
  rarities: Rarity[];
  residents: HabitatResident[];
};

function aggregateHabitats(): Map<string, AggregatedHabitat> {
  const map = new Map<string, AggregatedHabitat>();

  for (const pokemon of POKEMON) {
    for (const h of pokemon.localHabitats) {
      const slug = habitatSlug(h.name);
      let entry = map.get(slug);
      if (!entry) {
        entry = {
          name: h.name,
          slug,
          types: [],
          locations: [],
          availableTimes: [],
          availableWeather: [],
          rarities: [],
          residents: [],
        };
        map.set(slug, entry);
      }
      entry.residents.push({
        pokemon,
        rarity: h.rarity,
        availableTimes: h.availableTimes,
        availableWeather: h.availableWeather,
        locations: h.locations,
      });
      entry.types.push(...pokemon.types);
      entry.locations.push(...resolveLocations(h.locations));
      entry.availableTimes.push(...h.availableTimes);
      entry.availableWeather.push(...h.availableWeather);
      entry.rarities.push(h.rarity);
    }
  }

  const rarityOrder: Rarity[] = ['Common', 'Uncommon', 'Rare', 'Very Rare'];
  const timeOrder: TimeOfDay[] = ['Morning', 'Day', 'Evening', 'Night'];
  const weatherOrder: Weather[] = ['Sun', 'Cloud', 'Rain', 'Snow', 'Storm'];
  for (const entry of map.values()) {
    entry.types = Array.from(new Set(entry.types)).sort();
    entry.locations = Array.from(new Set(entry.locations)).sort();
    entry.availableTimes = timeOrder.filter((t) => entry.availableTimes.includes(t));
    entry.availableWeather = weatherOrder.filter((w) => entry.availableWeather.includes(w));
    entry.rarities = rarityOrder.filter((r) => entry.rarities.includes(r));
    entry.residents.sort((a, b) => a.pokemon.dexNumber - b.pokemon.dexNumber);
  }

  return map;
}

export function allHabitats(): AggregatedHabitat[] {
  return Array.from(aggregateHabitats().values()).sort((a, b) =>
    a.name.localeCompare(b.name),
  );
}

export function getHabitatBySlug(slug: string): AggregatedHabitat | undefined {
  return aggregateHabitats().get(slug);
}
