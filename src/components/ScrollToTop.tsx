'use client';

export function ScrollToTop() {
  return (
    <div className="flex justify-center pt-2">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="cursor-pointer inline-flex items-center gap-2 rounded-full border-2 border-sand-200 bg-white px-5 py-2.5 text-sm font-semibold text-sand-700 shadow-sm transition hover:border-leaf-400 hover:text-leaf-600 focus:outline-none focus:border-leaf-400 focus:ring-2 focus:ring-leaf-300"
      >
        <span aria-hidden>↑</span>
        Back to top
      </button>
    </div>
  );
}
