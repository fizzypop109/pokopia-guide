export function dex(n: number): string {
  return `#${n.toString().padStart(3, '0')}`;
}

export function spritePath(n: number): string {
  return `/pokemon/${n.toString().padStart(3, '0')}.png`;
}

export function specialtyIcon(specialty: string): string {
  return `/specialties/${specialty.toLowerCase().replace(/\s+/g, '')}.png`;
}

export function habitatImage(slug: string): string {
  return `/habitats/${slug}.png`;
}

const IDEAL_HABITAT_ICON: Record<string, string> = {
  Bright: '☀️',
  Warm: '🌤️',
  Humid: '🌫️',
  Dim: '🌙',
  Damp: '💧',
  Cold: '❄️',
  Hot: '🔥',
  Windy: '🌬️',
  Rocky: '🪨',
  Sandy: '🏜️',
};

export function idealHabitatIcon(name: string): string {
  return IDEAL_HABITAT_ICON[name] ?? '🌍';
}

export function typeColor(type: string): string {
  const map: Record<string, string> = {
    Normal: 'bg-zinc-400/25 text-zinc-800',
    Fire: 'bg-orange-500/25 text-orange-900',
    Water: 'bg-blue-500/25 text-blue-900',
    Grass: 'bg-green-500/25 text-green-900',
    Electric: 'bg-yellow-400/35 text-yellow-900',
    Ice: 'bg-cyan-400/25 text-cyan-900',
    Fighting: 'bg-red-700/25 text-red-900',
    Poison: 'bg-purple-500/25 text-purple-900',
    Ground: 'bg-amber-700/25 text-amber-900',
    Flying: 'bg-sky-400/25 text-sky-900',
    Psychic: 'bg-pink-500/25 text-pink-900',
    Bug: 'bg-lime-500/25 text-lime-900',
    Rock: 'bg-stone-500/25 text-stone-900',
    Ghost: 'bg-indigo-600/25 text-indigo-900',
    Dragon: 'bg-violet-600/25 text-violet-900',
    Dark: 'bg-zinc-800/30 text-zinc-900',
    Steel: 'bg-slate-400/25 text-slate-900',
    Fairy: 'bg-rose-400/25 text-rose-900',
  };
  return map[type] ?? 'bg-zinc-400/25 text-zinc-800';
}
