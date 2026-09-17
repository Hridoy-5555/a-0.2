import React from 'react';

export default function MovieCard({ show, onSelect }) {
  // Normalize show object whether fetched from /shows or /search/shows
  const movie = show.show || show;
  
  const poster = movie.image?.medium || 'https://via.placeholder.com/210x295?text=No+Image';
  const title = movie.name || 'Untitled';
  const rating = movie.rating?.average || 'N/A';
  const premierYear = movie.premiered ? movie.premiered.split('-')[0] : 'Unknown';

  return (
    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 flex flex-col group hover:border-slate-700 transition shadow-md">
      <div className="relative aspect-[2/3] overflow-hidden bg-slate-800">
        <img 
          src={poster} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          loading="lazy"
        />
      </div>
      
      <div className="p-4 flex flex-col flex-grow justify-between space-y-3">
        <div>
          <h3 className="font-bold text-base text-white line-clamp-1 mb-1">{title}</h3>
          <div className="flex items-center space-x-3 text-xs text-slate-400">
            <span>⭐ {rating}</span>
            <span>•</span>
            <span>📅 {premierYear}</span>
          </div>
        </div>

        <button
          onClick={() => onSelect(movie)}
          className="w-full py-2 px-4 bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white text-xs font-semibold rounded-lg transition"
        >
          See Details
        </button>
      </div>
    </div>
  );
}