import { Github, Mail, Info } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-emerald-400">PixoraVault</div>
          <p className="mt-2 text-white/70">Futuristic vault of cinematic 16K wallpapers, anime art and 3D renders. Optimized for performance with lazy-loading and CDN-ready images.</p>
        </div>
        <div>
          <div className="font-semibold mb-3 flex items-center gap-2"><Info className="size-4"/> About</div>
          <ul className="space-y-2 text-white/70">
            <li><a href="#categories" className="hover:text-white">Categories</a></li>
            <li><a href="#gallery" className="hover:text-white">Top Picks</a></li>
            <li><a href="#upload" className="hover:text-white">Upload Zone</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3 flex items-center gap-2"><Mail className="size-4"/> Contact</div>
          <ul className="space-y-2 text-white/70">
            <li><a href="mailto:hello@pixoravault.app" className="hover:text-white">hello@pixoravault.app</a></li>
            <li className="flex items-center gap-2"><Github className="size-4"/> <a href="#" className="hover:text-white">GitHub</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-white/50 text-sm">© {new Date().getFullYear()} PixoraVault. All rights reserved.</div>
    </footer>
  );
}
