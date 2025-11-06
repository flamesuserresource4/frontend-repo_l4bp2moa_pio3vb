import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Images, Palette, Sparkles, PenTool, Cube, UserSquare2 } from 'lucide-react';

const raw = [
  { key: '16k', name: '16K HD', icon: Images, gradient: 'from-cyan-500 to-fuchsia-500' },
  { key: 'anime', name: 'Anime', icon: Sparkles, gradient: 'from-pink-500 to-violet-500' },
  { key: '3d', name: '3D', icon: Cube, gradient: 'from-emerald-500 to-cyan-500' },
  { key: 'sketch', name: 'Sketch', icon: PenTool, gradient: 'from-amber-500 to-rose-500' },
  { key: 'cartoon', name: 'Cartoon', icon: Palette, gradient: 'from-sky-500 to-indigo-500' },
  { key: 'dp', name: 'DP Zone', icon: UserSquare2, gradient: 'from-lime-500 to-teal-500' },
];

export default function Categories({ onSelect }) {
  const [active, setActive] = useState('16k');
  const items = useMemo(() => raw, []);

  return (
    <section id="categories" className="relative py-20 bg-gradient-to-b from-black to-slate-900 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(168,85,247,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.12),transparent_35%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Browse by Category</h2>
            <p className="text-white/70 mt-2">16K UHD, Anime, 3D renders, sketches, cartoons and more</p>
          </div>
          <div className="text-sm text-white/60">Tap a card to filter</div>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map(({ key, name, icon: Icon, gradient }) => {
            const isActive = active === key;
            return (
              <motion.button
                key={key}
                onClick={() => { setActive(key); onSelect?.(key); }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                className={`relative overflow-hidden rounded-2xl p-4 text-left group backdrop-blur-xl border ${isActive ? 'border-white/40' : 'border-white/15'} bg-white/10`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 group-hover:opacity-30 transition pointer-events-none`} />
                <Icon className="size-7 text-white drop-shadow" />
                <div className="mt-3 font-semibold">{name}</div>
                <div className="text-xs text-white/70">High-res, curated</div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
