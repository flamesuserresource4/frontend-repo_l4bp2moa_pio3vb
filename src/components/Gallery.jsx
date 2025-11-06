import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Download, Search } from 'lucide-react';

const data = [
  { id: 'w1', url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2400&auto=format&fit=crop', title: 'Cosmic Trail', tags: ['16k','3d','neon'], tone: 'cool', resolution: '16K' },
  { id: 'w2', url: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=2400&auto=format&fit=crop', title: 'Neon City', tags: ['3d','anime'], tone: 'vivid', resolution: '8K' },
  { id: 'w3', url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2400&auto=format&fit=crop', title: 'Aesthetic Pastel', tags: ['cartoon','sketch'], tone: 'pastel', resolution: '4K' },
  { id: 'w4', url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2400&auto=format&fit=crop', title: 'Aurora Canyon', tags: ['16k','nature'], tone: 'cool', resolution: '16K' },
  { id: 'w5', url: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=2400&auto=format&fit=crop', title: 'Cyber Drive', tags: ['3d','neon'], tone: 'vivid', resolution: '8K' },
  { id: 'w6', url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=2400&auto=format&fit=crop', title: 'Dream Gradient', tags: ['aesthetic'], tone: 'pastel', resolution: '4K' },
];

function matchesQuery(item, q) {
  if (!q) return true;
  const s = q.toLowerCase();
  return (
    item.title.toLowerCase().includes(s) ||
    item.tags.some(t => t.toLowerCase().includes(s)) ||
    item.resolution.toLowerCase().includes(s)
  );
}

export default function Gallery({ activeCategory }) {
  const [query, setQuery] = useState('');
  const [tone, setTone] = useState('');
  const [resolution, setResolution] = useState('');
  const [favorites, setFavorites] = useState(() => new Set());

  const filtered = useMemo(() => {
    return data.filter(it => {
      const catOk = activeCategory ? it.tags.includes(activeCategory) || (activeCategory === '16k' && it.resolution === '16K') : true;
      const qOk = matchesQuery(it, query);
      const toneOk = tone ? it.tone === tone : true;
      const resOk = resolution ? it.resolution === resolution : true;
      return catOk && qOk && toneOk && resOk;
    });
  }, [activeCategory, query, tone, resolution]);

  useEffect(() => {
    setQuery(''); setTone(''); setResolution('');
  }, [activeCategory]);

  const toggleFav = (id) => {
    setFavorites(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <section id="gallery" className="relative py-16 bg-slate-950 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_60%_10%,rgba(56,189,248,0.1),transparent_40%),radial-gradient(circle_at_10%_80%,rgba(236,72,153,0.08),transparent_40%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="backdrop-blur-xl bg-white/10 border border-white/15 rounded-2xl p-4 md:p-6">
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-white/60" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by tag, resolution, tone..."
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/10 border border-white/15 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <select value={tone} onChange={(e)=>setTone(e.target.value)} className="px-3 py-3 rounded-xl bg-white/10 border border-white/15">
              <option value="">All Tones</option>
              <option value="cool">Cool</option>
              <option value="vivid">Vivid</option>
              <option value="pastel">Pastel</option>
            </select>
            <select value={resolution} onChange={(e)=>setResolution(e.target.value)} className="px-3 py-3 rounded-xl bg-white/10 border border-white/15">
              <option value="">All Res</option>
              <option value="16K">16K</option>
              <option value="8K">8K</option>
              <option value="4K">4K</option>
            </select>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filtered.map(item => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="group relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/10 border border-white/15"
              >
                <img src={item.url} alt={item.title} loading="lazy" className="h-60 w-full object-cover" />
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <div className="text-xs text-white/60">{item.resolution} • {item.tone}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button aria-label="favorite" onClick={() => toggleFav(item.id)} className={`p-2 rounded-full bg-white/10 border border-white/15 ${favorites.has(item.id) ? 'text-rose-400' : 'text-white/80'}`}>
                      <Heart className="size-4" />
                    </button>
                    <a href={item.url} download className="p-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white shadow-[0_0_25px_rgba(56,189,248,0.45)]">
                      <Download className="size-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
