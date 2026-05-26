'use client';

import { useMemo, useState } from 'react';
import type {
  IdealHabitat,
  Pokemon,
  PokemonType,
  Rarity,
  Specialty,
} from '@/data/pokemon';
import { PokemonCard } from './PokemonCard';

interface Props {
  pokemon: Pokemon[];
  habitats: IdealHabitat[];
  types: PokemonType[];
  locations: string[];
  specialties: Specialty[];
  rarities: Rarity[];
}

export function PokemonExplorer({
  pokemon,
  habitats,
  types,
  locations,
  specialties,
  rarities,
}: Props) {
  const [query, setQuery] = useState('');
  const [habitat, setHabitat] = useState('');
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [rarity, setRarity] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return pokemon.filter((p) => {
      if (q && !p.name.toLowerCase().includes(q)) return false;
      if (habitat && p.idealHabitat !== habitat) return false;
      if (type && !p.types.includes(type as PokemonType)) return false;
      if (location && !p.locations.includes(location)) return false;
      if (specialty && p.specialty !== specialty) return false;
      if (rarity && p.rarity !== rarity) return false;
      return true;
    });
  }, [pokemon, query, habitat, type, location, specialty, rarity]);

  const reset = () => {
    setQuery('');
    setHabitat('');
    setType('');
    setLocation('');
    setSpecialty('');
    setRarity('');
  };

  const hasFilter =
    query || habitat || type || location || specialty || rarity;

  return (
    <div className="flex flex-col gap-4">
      <input
        type="search"
        placeholder="Search by name…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        <Select
          value={location}
          onChange={setLocation}
          placeholder="All locations"
          options={locations}
        />
        <Select
          value={habitat}
          onChange={setHabitat}
          placeholder="Ideal habitat"
          options={habitats}
        />
        <Select
          value={type}
          onChange={setType}
          placeholder="All types"
          options={types}
        />
        <Select
          value={specialty}
          onChange={setSpecialty}
          placeholder="All specialties"
          options={specialties}
        />
        <Select
          value={rarity}
          onChange={setRarity}
          placeholder="All rarities"
          options={rarities}
        />
      </div>
      <div className="flex items-center gap-3 text-sm">
        <span className="text-zinc-500">
          {filtered.length} of {pokemon.length}
        </span>
        {hasFilter && (
          <button
            onClick={reset}
            className="ml-auto text-emerald-600 hover:underline"
          >
            Clear filters
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed border-zinc-300 dark:border-zinc-800 p-12 text-center text-zinc-500">
          No Pokémon match those filters.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((p) => (
            <PokemonCard key={p.slug} pokemon={p} />
          ))}
        </div>
      )}
    </div>
  );
}

function Select({
  value,
  onChange,
  placeholder,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  options: readonly string[];
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
    >
      <option value="">{placeholder}</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}
