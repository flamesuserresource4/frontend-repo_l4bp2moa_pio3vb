import { useRef, useState } from 'react';
import HeroSection from './components/HeroSection';
import Categories from './components/Categories';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  const exploreRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('');

  const scrollToExplore = () => {
    exploreRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-lg font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-emerald-400">PixoraVault</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#categories" className="hover:text-white">Categories</a>
            <a href="#gallery" className="hover:text-white">Top Picks</a>
            <a href="#upload" className="hover:text-white">Upload</a>
            <a href="#about" className="hover:text-white">About</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <HeroSection onExplore={scrollToExplore} />
        <Categories onSelect={(key)=>setActiveCategory(key)} />
        <div ref={exploreRef}>
          <Gallery activeCategory={activeCategory} />
        </div>

        <section id="upload" className="relative py-20 bg-gradient-to-b from-slate-950 to-black">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Upload Zone</h2>
            <p className="text-white/70 mt-2">Share your masterpiece. Submissions require admin approval.</p>
            <form className="mt-8 grid gap-4 text-left">
              <input type="text" required placeholder="Title" className="px-4 py-3 rounded-xl bg-white/10 border border-white/15" />
              <input type="url" required placeholder="Image URL (CDN preferred)" className="px-4 py-3 rounded-xl bg-white/10 border border-white/15" />
              <input type="text" placeholder="Tags (comma separated)" className="px-4 py-3 rounded-xl bg-white/10 border border-white/15" />
              <button type="submit" className="justify-self-center inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-emerald-500 shadow-[0_0_25px_rgba(56,189,248,0.45)]">Submit for Review</button>
            </form>
          </div>
        </section>

        <section id="about" className="relative py-20 bg-black">
          <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl font-bold">About PixoraVault</h3>
              <p className="text-white/70 mt-3">A cinematic, 3D-driven destination for ultra high-res wallpapers. Built with smooth animations, glassmorphism UI and neon accents. Optimized with lazy loading and designed for mobile & desktop.</p>
              <ul className="mt-4 space-y-2 text-white/80 list-disc list-inside">
                <li>Smart search by tags, resolution and tone</li>
                <li>Categories: 16K HD, Anime, 3D, Sketch, Cartoon, DP Zone</li>
                <li>Ad-ready slots on download pages</li>
                <li>Favorites and login (coming soon)</li>
              </ul>
            </div>
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 p-1">
              <img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2400&auto=format&fit=crop" alt="cinematic" className="rounded-3xl object-cover" loading="lazy" />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

export default App;
