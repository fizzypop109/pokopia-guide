export function dex(n: number): string {
  return `#${n.toString().padStart(3, '0')}`;
}

export function spritePath(n: number): string {
  return `/pokemon/${n.toString().padStart(3, '0')}.png`;
}

export function specialtyIcon(specialty: string): string {
  return `/specialties/${specialty.toLowerCase().replace(/\s+/g, '')}.png`;
}

export function typeColor(type: string): string {
  const map: Record<string, string> = {
    Normal: 'bg-zinc-400/20 text-zinc-700 dark:text-zinc-200',
    Fire: 'bg-orange-500/20 text-orange-700 dark:text-orange-300',
    Water: 'bg-blue-500/20 text-blue-700 dark:text-blue-300',
    Grass: 'bg-green-500/20 text-green-700 dark:text-green-300',
    Electric: 'bg-yellow-400/30 text-yellow-700 dark:text-yellow-300',
    Ice: 'bg-cyan-400/20 text-cyan-700 dark:text-cyan-300',
    Fighting: 'bg-red-700/20 text-red-700 dark:text-red-300',
    Poison: 'bg-purple-500/20 text-purple-700 dark:text-purple-300',
    Ground: 'bg-amber-700/20 text-amber-800 dark:text-amber-300',
    Flying: 'bg-sky-400/20 text-sky-700 dark:text-sky-300',
    Psychic: 'bg-pink-500/20 text-pink-700 dark:text-pink-300',
    Bug: 'bg-lime-500/20 text-lime-700 dark:text-lime-300',
    Rock: 'bg-stone-500/20 text-stone-700 dark:text-stone-300',
    Ghost: 'bg-indigo-600/20 text-indigo-700 dark:text-indigo-300',
    Dragon: 'bg-violet-600/20 text-violet-700 dark:text-violet-300',
    Dark: 'bg-zinc-800/30 text-zinc-700 dark:text-zinc-300',
    Steel: 'bg-slate-400/20 text-slate-700 dark:text-slate-300',
    Fairy: 'bg-rose-400/20 text-rose-700 dark:text-rose-300',
  };
  return map[type] ?? 'bg-zinc-400/20 text-zinc-700 dark:text-zinc-200';
}
