import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import MovieListingPage from './components/MovieListingPage';
import MovieModal from './components/MovieModal';

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' or 'movies'
  const [selectedMovie, setSelectedMovie] = useState(null); // For the details modal
  const [searchQuery, setSearchQuery] = useState(''); // Global/Passed search query

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const handleNavigateToMovies = (query = '') => {
    setSearchQuery(query);
    setCurrentView('movies');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100 font-sans">
      {/* Navbar */}
      <Navbar onNavigate={(view) => setCurrentView(view)} onSearchRedirect={handleNavigateToMovies} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentView === 'home' ? (
          <>
            <Hero onExploreClick={() => handleNavigateToMovies()} />
          </>
        ) : (
          <MovieListingPage 
            initialQuery={searchQuery} 
            onSelectMovie={(movie) => setSelectedMovie(movie)} 
          />
        )}
      </main>

      {/* Movie Details Modal */}
      {selectedMovie && (
        <MovieModal 
          movie={selectedMovie} 
          onClose={() => setSelectedMovie(null)} 
        />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}