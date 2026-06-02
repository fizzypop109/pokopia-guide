'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { nav, site } from '@/config/site';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b-2 border-leaf-700/30 bg-leaf-500/90 backdrop-blur shadow-[0_2px_0_0_rgba(64,115,39,0.35)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <Link href="/" className="flex items-center gap-2 group">
          <img src="/logo-pokopia.png" alt="Pokopia logo" className="w-[100px] transition group-hover:rotate-12 group-hover:scale-110" />
          <span className="font-display font-bold text-lg sm:text-xl text-white drop-shadow-[0_1px_0_rgba(64,115,39,0.6)]">
            {site.name}
          </span>
        </Link>
        <nav className="flex items-center gap-1 -mx-1 px-1 overflow-x-auto">
          {nav.map((item) => {
            const active =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`shrink-0 px-3 py-1.5 rounded-full text-sm font-semibold transition ${
                  active
                    ? 'bg-white text-leaf-700 shadow-sm'
                    : 'text-white/90 hover:bg-white/20'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
