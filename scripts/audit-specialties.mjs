// Audit data specialties against serebii /specialty/ icons for every entry.
// Usage: node scripts/audit-specialties.mjs
import fs from 'fs';

const BASE = 'https://www.serebii.net/pokemonpokopia/pokedex';
const slugify = (n) => n.toLowerCase().replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const key = (n) => slugify(n).replace(/-/g, '');

// ordered serebii slugs from index
const idx = fs.readFileSync('idx.html', 'utf8');
const seq = [];
for (const m of idx.matchAll(/pokedex\/([a-z0-9]+)\.shtml/g)) if (seq[seq.length - 1] !== m[1]) seq.push(m[1]);
const byKey = new Map();
for (const s of seq) if (!byKey.has(s)) byKey.set(s, s); // serebii slug IS its own key

// (name, specialties) pairs from data, in order
const src = fs.readFileSync('src/data/pokemon.ts', 'utf8');
const entries = [];
for (const m of src.matchAll(/^    name: (['"])(.*?)\1,[\s\S]*?^    specialties: \[([^\]]*)\]/gm)) {
  const name = m[2];
  const specs = [...m[3].matchAll(/'([^']+)'/g)].map((x) => x[1]);
  entries.push({ name, specs });
}

async function pageSpecs(slug) {
  const res = await fetch(`${BASE}/${slug}.shtml`);
  if (!res.ok) return { err: `HTTP ${res.status}` };
  const html = await res.text();
  const specs = [];
  for (const m of html.matchAll(/\/pokemonpokopia\/pokedex\/specialty\/([a-z]+)\.png/g)) {
    if (!specs.includes(m[1])) specs.push(m[1]);
  }
  return { specs };
}

const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '');

// serebii slugs the index/key heuristic can't reach (punctuation, reordered variant names)
const OVERRIDE = {
  'Tangrowth (Professor)': 'professortangrowth',
  "Farfetch'd": 'farfetch%27d',
  'Snorlax (Mosslax)': 'mosslax',
  'Mime Jr.': 'mimejr.',
  'Mr. Mime': 'mr.mime',
  'Porygon-Z': 'porygon-z',
};

async function run() {
  let mismatches = 0, unmatched = 0, ok = 0;
  // map data entry -> serebii slug by key
  const idxKeys = new Map();
  for (const s of seq) idxKeys.set(s.replace(/[^a-z0-9]/g, ''), s);

  const limit = 8;
  let i = 0;
  async function worker() {
    while (i < entries.length) {
      const e = entries[i++];
      const k = key(e.name);
      const slug = OVERRIDE[e.name] ?? idxKeys.get(k);
      if (!slug) { console.log(`UNMATCHED  ${e.name} (key ${k})`); unmatched++; continue; }
      const { specs, err } = await pageSpecs(slug);
      if (err) { console.log(`FETCHERR   ${e.name} [${slug}] ${err}`); unmatched++; continue; }
      const dataSet = e.specs.map(norm).sort().join(',');
      const pageSet = specs.map(norm).sort().join(',');
      if (dataSet !== pageSet) {
        console.log(`MISMATCH   ${e.name} [${slug}]  data=[${e.specs.join(', ')}]  serebii=[${specs.join(', ')}]`);
        mismatches++;
      } else ok++;
    }
  }
  await Promise.all(Array.from({ length: limit }, worker));
  console.log(`\nchecked ${entries.length} | ok ${ok} | mismatches ${mismatches} | unmatched ${unmatched}`);
}
run();
