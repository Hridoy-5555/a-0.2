import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import { fetchAllShows, searchShows } from '../services/api';

export default function MovieListing({ onSelectMovie }) {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  // Initial load: Fetch all shows
  useEffect(() => {
    fetchAllShows()
      .then(data => {
        setMovies(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching shows:", err);
        setLoading(false);
      });
  }, []);

  // Handle Search input change
  const handleSearch = async (e) => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);
    setLoading(true);

    if (searchTerm.trim() === '') {
      const data = await fetchAllShows();
      setMovies(data);
    } else {
      const data = await searchShows(searchTerm);
      setMovies(data);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-xl mx-auto">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">🔍</span>
            <input
              type="text"
              value={query}
              onChange={handleSearch}
              placeholder="Search for a movie or TV show..."
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-700"
            />
          </div>
        </div>

        {/* Loading State */}
        {loading && <p className="text-center text-gray-500 text-lg">Loading amazing movies...</p>}

        {/* Movie Grid Layout (1 col mobile, 2 col tablet, 4 col desktop) */}
        {!loading && movies.length === 0 && (
          <p className="text-center text-gray-500 text-lg">No movies found matching your search.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} onSelect={onSelectMovie} />
          ))}
        </div>
      </div>
    </div>
  );
}