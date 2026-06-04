'use client';

import { useEffect, useState } from 'react';

export function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Visible as soon as scrolling starts, including at the bottom.
      setShow(window.scrollY > 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-5 right-5 z-50 cursor-pointer inline-flex items-center gap-2 rounded-full border-2 border-sand-200 bg-white px-4 py-2.5 text-sm font-semibold text-sand-700 shadow-md transition-all duration-200 hover:border-leaf-400 hover:text-leaf-600 focus:outline-none focus:border-leaf-400 focus:ring-2 focus:ring-leaf-300 ${
        show
          ? 'opacity-100 translate-y-0'
          : 'pointer-events-none opacity-0 translate-y-2'
      }`}
    >
      <span aria-hidden>↑</span>
      <span className="hidden sm:inline">Back to top</span>
    </button>
  );
}
