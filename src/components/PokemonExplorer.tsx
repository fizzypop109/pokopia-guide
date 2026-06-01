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
      if (location && !p.localHabitats.some(h => h.locations.includes(location))) return false;
      if (specialty && !p.specialties.includes(specialty as Specialty)) return false;
      return !(rarity && !p.localHabitats.some(h => h.rarity === rarity));

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
        className="rounded-full border-2 border-sand-200 bg-white px-5 py-2.5 text-sm shadow-sm focus:outline-none focus:border-leaf-400 focus:ring-2 focus:ring-leaf-300"
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
        <span className="inline-flex items-center gap-1.5 rounded-full bg-leaf-100 px-3 py-1 font-semibold text-leaf-700">
          {filtered.length} of {pokemon.length}
        </span>
        {hasFilter && (
          <button
            onClick={reset}
            className="ml-auto font-semibold text-berry-500 hover:underline"
          >
            Clear filters
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border-2 border-dashed border-sand-300 bg-white/60 p-12 text-center text-sand-500">
          <span className="block text-4xl mb-2">🍃</span>
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
      className="rounded-full border-2 border-sand-200 bg-white px-4 py-2 text-sm shadow-sm focus:outline-none focus:border-leaf-400 focus:ring-2 focus:ring-leaf-300"
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
