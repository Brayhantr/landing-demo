import React, { useEffect, useState } from 'react';
import { X, Star, Play } from 'lucide-react';
import YouTubeEmbed from './YouTubeEmbed';
import { Movie } from '../types';

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

const MovieModal: React.FC<MovieModalProps> = ({ movie, onClose }) => {
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    // Reset trailer state when movie changes
    setShowTrailer(false);

    // Disable scrolling while modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [movie]);

  // Function to convert rating to stars
  const getStars = (rating: number) => {
    const starsTotal = 5;
    const starPercentage = (rating / 10) * starsTotal;
    const starsFull = Math.floor(starPercentage);
    const hasHalfStar = starPercentage % 1 >= 0.5;
    
    let stars = [];
    
    // Full stars
    for (let i = 0; i < starsFull; i++) {
      stars.push(<Star key={`full-${i}`} className="fill-[#ffd700] text-[#ffd700]" size={18} />);
    }
    
    // Half star
    if (hasHalfStar) {
      stars.push(<Star key="half" className="fill-[#ffd700] text-[#ffd700] opacity-50" size={18} />);
    }
    
    // Empty stars
    const emptyStars = starsTotal - starsFull - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="text-[#ffd700]" size={18} />);
    }
    
    return <div className="flex">{stars}</div>;
  };

  // Prevent clicks inside the modal from closing it
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div 
      className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="modal-content relative bg-[#1e1e1e] max-w-4xl w-full p-8 rounded-xl shadow-[0_0_30px_rgba(138,43,226,0.3)]"
        onClick={handleModalClick}
      >
        <button 
          className="absolute top-4 right-6 text-3xl hover:text-[#8a2be2] hover:scale-110 transition-all focus:outline-none"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        
        {showTrailer && movie.youtube_id ? (
          <YouTubeEmbed youtubeId={movie.youtube_id} />
        ) : (
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="relative group">
                <img 
                  src={movie.poster} 
                  alt={movie.title} 
                  className="w-full rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.3)]"
                />
                {movie.youtube_id && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer rounded-lg"
                    onClick={() => setShowTrailer(true)}
                  >
                    <div className="bg-[#8a2be2]/80 rounded-full p-3 transform transition-transform hover:scale-110">
                      <Play fill="white" size={30} />
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>
              
              <div className="flex gap-8 mb-6">
                <div>
                  <div className="text-white/80 mb-1">Michel</div>
                  <div className="flex items-center gap-1">{getStars(movie.michel_rating)}</div>
                  <div className="text-sm text-white/60">{movie.michel_rating}/10</div>
                </div>
                <div>
                  <div className="text-white/80 mb-1">Brayhant</div>
                  <div className="flex items-center gap-1">{getStars(movie.brayhant_rating)}</div>
                  <div className="text-sm text-white/60">{movie.brayhant_rating}/10</div>
                </div>
              </div>
              
              <p className="text-lg leading-relaxed mb-6 text-white/90">
                {movie.synopsis}
              </p>
              
              {movie.youtube_id && (
                <button 
                  className="neon-btn bg-[#8a2be2] text-white py-2 px-6 rounded-lg flex items-center gap-2 hover:bg-[#7825c9] transition-all shadow-[0_0_15px_rgba(138,43,226,0.4)]"
                  onClick={() => setShowTrailer(true)}
                >
                  <Play size={18} fill="white" />
                  Ver trailer
                </button>
              )}
            </div>
          </div>
        )}
        
        {showTrailer && (
          <button 
            className="mt-4 bg-[#333] hover:bg-[#444] text-white py-2 px-4 rounded-lg transition-all"
            onClick={() => setShowTrailer(false)}
          >
            Volver a detalles
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieModal;