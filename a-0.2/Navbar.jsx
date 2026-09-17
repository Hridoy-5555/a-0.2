import React from 'react';

export default function Navbar({ activePage, setActivePage }) {
  return (
    <header className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button 
          onClick={() => setActivePage('home')}
          className="flex items-center space-x-2 text-xl font-bold tracking-wide text-white hover:text-indigo-400 transition"
        >
          <span>🎬</span>
          <span>MovieExplorer</span>
        </button>
        
        <nav className="flex items-center space-x-4">
          <button
            onClick={() => setActivePage('home')}
            className={`px-3 py-2 rounded-md text-sm font-medium transition ${
              activePage === 'home' ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:text-white'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setActivePage('movies')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              activePage === 'movies' ? 'bg-indigo-600 text-white' : 'bg-indigo-600/20 text-indigo-400 hover:bg-indigo-600/30'
            }`}
          >
            Movies
          </button>
        </nav>
      </div>
    </header>
  );
}