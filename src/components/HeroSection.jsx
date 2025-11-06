import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Star } from 'lucide-react';

const featured = [
  {
    id: 'f1',
    url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2400&auto=format&fit=crop',
    title: 'Aurora Ridge 16K',
    tags: ['16K', 'nature', 'cool']
  },
  {
    id: 'f2',
    url: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=2400&auto=format&fit=crop',
    title: 'Synthwave Horizon',
    tags: ['3D', 'neon']
  },
  {
    id: 'f3',
    url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2400&auto=format&fit=crop',
    title: 'Galactic Core',
    tags: ['cosmic', 'dark']
  }
];

export default function HeroSection({ onExplore }) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, -80]);
  const y2 = useTransform(scrollY, [0, 600], [0, 120]);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black pointer-events-none" />

      <motion.div style={{ y: y1 }} className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-emerald-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.35)]"
        >
          PixoraVault
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-4 text-base md:text-lg text-white/80 max-w-2xl"
        >
          Cinematic 16K wallpapers, anime art, 3D renders, sketches and more — curated for immersive screens.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={onExplore}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-emerald-500 shadow-[0_0_25px_rgba(56,189,248,0.45)] hover:shadow-[0_0_40px_rgba(56,189,248,0.75)] transition-all duration-300"
          >
            <Rocket className="size-5" /> Explore Vault
          </button>
          <a
            href="#upload"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-cyan-200/90 backdrop-blur-xl bg-white/10 border border-white/15 hover:bg-white/15 transition-all duration-300"
          >
            <Star className="size-5" /> Submit Artwork
          </a>
        </motion.div>
      </motion.div>

      <motion.div style={{ y: y2 }} className="relative z-10 mt-6">
        <Carousel items={featured} />
      </motion.div>
    </section>
  );
}

function Carousel({ items }) {
  return (
    <div className="pointer-events-auto w-full absolute bottom-6 left-0 px-6">
      <div className="mx-auto max-w-5xl rounded-3xl backdrop-blur-xl bg-white/10 border border-white/15 p-4 overflow-hidden">
        <div className="flex gap-4 animate-[slide_24s_linear_infinite] will-change-transform">
          {[...items, ...items].map((it, i) => (
            <figure key={it.id + '-' + i} className="relative min-w-[280px] md:min-w-[380px] aspect-[16/9] overflow-hidden rounded-2xl">
              <img src={it.url} alt={it.title} loading="lazy" className="h-full w-full object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent text-white text-sm">
                {it.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <style>{`@keyframes slide { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}
