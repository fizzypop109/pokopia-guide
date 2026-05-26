export const site = {
  name: 'Pokopia Guide',
  tagline: 'Find every Pokémon — their habitat, area, and specialty.',
} as const;

export const nav = [
  { href: '/', label: 'All Pokémon' },
  { href: '/locations', label: 'Locations' },
  { href: '/habitats', label: 'Habitats' },
] as const;
