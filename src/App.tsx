import React, { useState, useEffect, useRef } from 'react';
import { Search, PlusCircle, X } from 'lucide-react';
import { Movie } from './types';
import MovieCard from './components/MovieCard';
import MovieModal from './components/MovieModal';
import { getMovies, addMovie } from './lib/supabase';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newMovie, setNewMovie] = useState<Partial<Movie>>({
    title: '',
    synopsis: '',
    poster: '',
    michelRating: 5,
    brayhantRating: 5,
    trailerUrl: ''
  });
  
  const moviesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadMovies();

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, options);

    if (moviesRef.current) {
      const movieElements = moviesRef.current.querySelectorAll('.movie-card');
      movieElements.forEach(el => observer.observe(el));
    }

    return () => {
      if (moviesRef.current) {
        const movieElements = moviesRef.current.querySelectorAll('.movie-card');
        movieElements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);

  const loadMovies = async () => {
    setLoading(true);
    const fetchedMovies = await getMovies();
    setMovies(fetchedMovies);
    setLoading(false);
  };

  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          movie.synopsis.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (!matchesSearch) return false;
    
    if (filter === 'top-rated') {
      const avgRating = (movie.michelRating + movie.brayhantRating) / 2;
      return avgRating >= 8;
    } else if (filter === 'recent') {
      return movies.indexOf(movie) >= Math.max(0, movies.length - 10);
    }
    
    return true;
  });

  const handleAddMovie = async () => {
    if (!newMovie.title || !newMovie.synopsis || !newMovie.poster) {
      alert('Por favor, completa todos los campos obligatorios');
      return;
    }

    const movieToAdd: Movie = {
      title: newMovie.title!,
      synopsis: newMovie.synopsis!,
      poster: newMovie.poster!,
      michelRating: newMovie.michelRating || 5,
      brayhantRating: newMovie.brayhantRating || 5,
      trailerUrl: newMovie.trailerUrl,
      youtubeId: newMovie.trailerUrl ? getYoutubeId(newMovie.trailerUrl) : undefined
    };

    const addedMovie = await addMovie(movieToAdd);
    if (addedMovie) {
      setMovies(prevMovies => [addedMovie, ...prevMovies]);
      setShowAddModal(false);
      setNewMovie({
        title: '',
        synopsis: '',
        poster: '',
        michelRating: 5,
        brayhantRating: 5,
        trailerUrl: ''
      });
    }
  };

  const getYoutubeId = (url: string): string => {
    try {
      const urlObj = new URL(url);
      if (urlObj.hostname === 'www.youtube.com' && urlObj.searchParams.has('v')) {
        return urlObj.searchParams.get('v') || '';
      } else if (urlObj.hostname === 'youtu.be') {
        return urlObj.pathname.substring(1);
      }
      return '';
    } catch (error) {
      return '';
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {loading && (
        <div className="fixed inset-0 bg-[#121212] flex items-center justify-center z-50 transition-opacity">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-[#1e1e1e] border-t-[#8a2be2] rounded-full animate-spin mx-auto mb-4"></div>
            <h2 className="text-2xl font-bold">Cargando tu colección de películas...</h2>
          </div>
        </div>
      )}

      <div className="fixed inset-0 pointer-events-none border-4 border-[#8a2be2]/30 shadow-[0_0_20px_rgba(138,43,226,0.5)] z-50"></div>

      <header className="text-center py-8 mb-8 border-b border-white/10 sticky top-0 bg-[#121212]/70 backdrop-blur-lg z-40">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow-lg">CineFans</h1>
        
        <div className="max-w-md mx-auto relative px-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Buscar películas o series..." 
              className="w-full py-3 px-4 pl-10 bg-white/10 border border-white/20 rounded-full text-white focus:outline-none focus:shadow-[0_0_15px_rgba(138,43,226,0.3)] focus:bg-white/15 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70" size={18} />
          </div>
        </div>
        
        <div className="flex justify-center gap-4 mt-4 flex-wrap px-4">
          <button 
            className={`px-4 py-2 rounded-full transition-all ${filter === 'all' ? 'bg-[#8a2be2] shadow-[0_0_15px_rgba(138,43,226,0.4)]' : 'bg-white/10 border border-white/20 hover:bg-white/15'}`}
            onClick={() => setFilter('all')}
          >
            Todas
          </button>
          <button 
            className={`px-4 py-2 rounded-full transition-all ${filter === 'top-rated' ? 'bg-[#8a2be2] shadow-[0_0_15px_rgba(138,43,226,0.4)]' : 'bg-white/10 border border-white/20 hover:bg-white/15'}`}
            onClick={() => setFilter('top-rated')}
          >
            Mejor valoradas
          </button>
          <button 
            className={`px-4 py-2 rounded-full transition-all ${filter === 'recent' ? 'bg-[#8a2be2] shadow-[0_0_15px_rgba(138,43,226,0.4)]' : 'bg-white/10 border border-white/20 hover:bg-white/15'}`}
            onClick={() => setFilter('recent')}
          >
            Más recientes
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 pb-20" ref={moviesRef}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredMovies.length === 0 && !loading ? (
            <div className="col-span-full text-center py-12 text-white/70 text-lg">
              No se encontraron películas que coincidan con tu búsqueda
            </div>
          ) : (
            filteredMovies.map((movie, index) => (
              <MovieCard 
                key={index}
                movie={movie}
                onClick={() => setSelectedMovie(movie)}
                index={index}
              />
            ))
          )}
        </div>
      </div>

      <button 
        onClick={() => setShowAddModal(true)}
        className="fixed bottom-10 right-10 w-14 h-14 bg-[#8a2be2] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(138,43,226,0.5)] transition-all hover:scale-110 hover:shadow-[0_0_30px_rgba(138,43,226,0.7)] z-30"
      >
        <PlusCircle size={26} />
      </button>

      {showAddModal && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50 overflow-y-auto"
          onClick={() => setShowAddModal(false)}
        >
          <div 
            className="relative bg-[#1e1e1e] max-w-2xl w-full p-8 rounded-xl shadow-[0_0_30px_rgba(138,43,226,0.3)]"
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-6 text-3xl hover:text-[#8a2be2] hover:scale-110 transition-all focus:outline-none"
              onClick={() => setShowAddModal(false)}
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold mb-6">Agregar nueva película</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">
                  Título *
                </label>
                <input
                  type="text"
                  value={newMovie.title}
                  onChange={e => setNewMovie({...newMovie, title: e.target.value})}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#8a2be2] transition-colors"
                  placeholder="Ingresa el título de la película"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">
                  URL del póster *
                </label>
                <input
                  type="url"
                  value={newMovie.poster}
                  onChange={e => setNewMovie({...newMovie, poster: e.target.value})}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#8a2be2] transition-colors"
                  placeholder="https://ejemplo.com/poster.jpg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">
                  Sinopsis *
                </label>
                <textarea
                  value={newMovie.synopsis}
                  onChange={e => setNewMovie({...newMovie, synopsis: e.target.value})}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#8a2be2] transition-colors h-32"
                  placeholder="Escribe una breve sinopsis de la película"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Calificación Michel (0-10)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="10"
                    step="0.5"
                    value={newMovie.michelRating}
                    onChange={e => setNewMovie({...newMovie, michelRating: parseFloat(e.target.value)})}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#8a2be2] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Calificación Brayhant (0-10)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="10"
                    step="0.5"
                    value={newMovie.brayhantRating}
                    onChange={e => setNewMovie({...newMovie, brayhantRating: parseFloat(e.target.value)})}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#8a2be2] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">
                  URL del trailer (YouTube)
                </label>
                <input
                  type="url"
                  value={newMovie.trailerUrl}
                  onChange={e => setNewMovie({...newMovie, trailerUrl: e.target.value})}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#8a2be2] transition-colors"
                  placeholder="https://www.youtube.com/watch?v=..."
                />
              </div>

              <div className="flex justify-end gap-4 mt-6">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="px-6 py-2 bg-white/10 rounded-lg hover:bg-white/15 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleAddMovie}
                  className="px-6 py-2 bg-[#8a2be2] rounded-lg hover:bg-[#7825c9] transition-colors shadow-[0_0_15px_rgba(138,43,226,0.4)]"
                >
                  Agregar película
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedMovie && (
        <MovieModal 
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}

export default App;