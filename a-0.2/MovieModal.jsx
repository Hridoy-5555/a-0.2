import React from 'react';

export default function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  const backdrop = movie.image?.original || movie.image?.medium || 'https://via.placeholder.com/600x400?text=No+Image';
  const title = movie.name || 'Untitled';
  const rating = movie.rating?.average || 'N/A';
  const premiered = movie.premiered || 'N/A';
  const genres = movie.genres ? movie.genres.join(', ') : 'N/A';
  // Strip HTML tags from summary if provided by TVMaze API
  const cleanSummary = movie.summary ? movie.summary.replace(/<[^>]*>?/gm, '') : 'No description available.';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-slate-900 border border-slate-800 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header backdrop image & close button */}
        <div className="relative h-56 sm:h-72 bg-slate-950 flex-shrink-0">
          <img src={backdrop} alt={title} className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 bg-black/60 hover:bg-black text-white rounded-full flex items-center justify-center transition"
          >
            ✕
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 overflow-y-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{title}</h2>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
            <span className="bg-indigo-950 text-indigo-400 px-3 py-1 rounded-full border border-indigo-800/50">
              ⭐ Rating: {rating}
            </span>
            <span className="bg-slate-800 px-3 py-1 rounded-full text-slate-300">
              📅 Release: {premiered}
            </span>
            <span className="text-xs text-slate-400">
              <strong>Genre:</strong> {genres}
            </span>
          </div>

          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Overview</h4>
            <p className="text-slate-300 text-sm leading-relaxed">{cleanSummary}</p>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-sm font-medium transition"
            >
              ❌ Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}