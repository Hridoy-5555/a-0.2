import React from 'react';

export default function Hero({ onExplore }) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-indigo-950/40 via-slate-900 to-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
          DISCOVER <span className="text-indigo-500">MOVIES</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-300 mb-8">
          Explore and discover your favorite movies and shows from around the world effortlessly.
        </p>
        <button
          onClick={onExplore}
          className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5"
        >
          Explore Now
        </button>
      </div>
    </section>
  );
}