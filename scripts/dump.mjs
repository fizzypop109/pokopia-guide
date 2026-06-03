// Serebii Pokopia page -> compact field dump for hand-transcription.
// Usage: node scripts/dump.mjs <slug> [slug...]
// No small-model middleman: parses raw HTML text + img srcs directly.

const BASE = 'https://www.serebii.net/pokemonpokopia/pokedex';
const TIMES = ['Morning', 'Day', 'Evening', 'Night'];
const WEATHER = ['Sun', 'Cloud', 'Rain', 'Snow', 'Storm'];

function tokenize(html) {
  let h = html
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<style[\s\S]*?<\/style>/g, '');
  // turn imgs into [IMG alt|fullsrc] tokens (alt before or after src)
  h = h
    .replace(/<img[^>]*alt="([^"]*)"[^>]*src="([^"]*)"[^>]*>/g, (_, alt, src) => `\n[IMG ${alt}|${src}]\n`)
    .replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*>/g, (_, src, alt) => `\n[IMG ${alt}|${src}]\n`);
  return h
    .replace(/<[^>]+>/g, '\n')
    .replace(/&#0?39;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8221;/g, '"')
    .replace(/&eacute;/gi, 'é')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);
}

function imgAlt(line) {
  const m = line.match(/^\[IMG (.*)\|([^\]]+)\]$/);
  return m ? { alt: m[1], src: m[2] } : null;
}

function parse(slug, html) {
  const t = tokenize(html);
  const text = t.filter((l) => !l.startsWith('[IMG')); // plain text lines
  const imgs = t.map(imgAlt).filter(Boolean);

  // dex + name
  const header = text.find((l) => /^#\d+\s+/.test(l)) || '';
  const hm = header.match(/^#(\d+)\s+(.+)$/) || [, '?', slug];

  // types: imgs under /type/, specialties under /specialty/ (scope by path)
  const types = imgs.filter((i) => /\/type\//.test(i.src)).map((i) => i.alt);
  const specialties = imgs.filter((i) => /\/specialty\//.test(i.src)).map((i) => i.alt);

  // classification/height/weight: 5 values after "Std. Weight"
  const wi = text.findIndex((l) => /^Std\.?\s*Weight/i.test(l));
  let cls = '?', height = '?', weight = '?';
  if (wi >= 0) {
    const v = text.slice(wi + 1, wi + 6);
    cls = v[0];
    height = `${v[1]} (${v[2]})`;
    weight = `${v[3]} (${v[4]})`;
  }

  // After "Favorites" header the values follow: <nspec specialty names>, ideal, 6 favorites.
  const fi = text.findIndex((l) => /^Favorites$/i.test(l));
  const ns = specialties.length;
  const ideal = fi >= 0 ? text[fi + 1 + ns] : '?';
  const favorites = fi >= 0 ? text.slice(fi + 2 + ns, fi + 8 + ns) : [];

  // habitats: names from habitatdex imgs; availability from text blocks
  const habNames = imgs.filter((i) => /\/habitatdex\//.test(i.src)).map((i) => i.alt);
  // slice the availability region between "Habitats & Locations" and "Game Names"
  const start = text.findIndex((l) => /^Habitats? & Locations/i.test(l));
  const end = text.findIndex((l) => /^Game Names/i.test(l));
  const region = start >= 0 ? text.slice(start, end >= 0 ? end : undefined) : [];
  const habitats = parseHabitats(region, habNames);

  return { dex: hm[1], name: hm[2], types, cls, height, weight, specialties, ideal, favorites, habitats };
}

const LOCS = ['Withered Wastelands', 'Bleak Beach', 'Rocky Ridges', 'Sparkling Skylands', 'Palette Town', 'Cloud Island'];

function parseHabitats(region, names) {
  // collect, in order: Location blocks, Rarity values, Time/Weather blocks
  const locBlocks = [];
  const rarities = [];
  const twBlocks = [];
  for (let i = 0; i < region.length; i++) {
    const l = region[i];
    if (/^Location$/i.test(l)) {
      const locs = [];
      let j = i + 1;
      if (region[j] === ':') j++;
      while (j < region.length && LOCS.includes(region[j])) { locs.push(region[j]); j++; }
      locBlocks.push(locs);
      i = j - 1;
    } else if (/^Rarity$/i.test(l)) {
      let j = i + 1;
      if (region[j] === ':') j++;
      rarities.push(region[j]);
      i = j;
    } else if (/^Time$/i.test(l)) {
      // following lines: subset of TIMES then subset of WEATHER (until next Time/Location/Rarity)
      let j = i + 1;
      if (/^Weather$/i.test(region[j])) j++;
      const times = [], weather = [];
      while (j < region.length && (TIMES.includes(region[j]) || WEATHER.includes(region[j]))) {
        if (TIMES.includes(region[j])) times.push(region[j]); else weather.push(region[j]);
        j++;
      }
      twBlocks.push({ times, weather });
      i = j - 1;
    }
  }
  return names.map((n, k) => {
    const locs = locBlocks[k] || [];
    const loc = locs.length === 6 ? 'any' : locs.join(', ');
    const t = twBlocks[k] || { times: [], weather: [] };
    return { name: n, loc, rarity: rarities[k] || '?', times: t.times, weather: t.weather };
  });
}

const ab = { Morning: 'M', Day: 'D', Evening: 'E', Night: 'N' };

async function main() {
  const slugs = process.argv.slice(2);
  for (const slug of slugs) {
    const res = await fetch(`${BASE}/${slug}.shtml`);
    if (!res.ok) { console.log(`#? ${slug}  !! HTTP ${res.status}`); continue; }
    const p = parse(slug, await res.text());
    console.log(`\n#${p.dex} ${p.name}  [${slug}]  types: ${p.types.join(', ')}`);
    console.log(`  cls: ${p.cls} | ${p.height} | ${p.weight}`);
    console.log(`  spec: ${p.specialties.join(', ')} | ideal: ${p.ideal}`);
    for (const h of p.habitats) {
      console.log(`  hab: ${h.name} | ${h.loc} | ${h.rarity} | ${h.times.map((x) => ab[x]).join('')} | ${h.weather.join(' ')}`);
    }
    console.log(`  fav: ${p.favorites.join('; ')}`);
  }
}
main();
