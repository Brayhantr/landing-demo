import React from 'react';
import { Star } from 'lucide-react';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
  index: number;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick, index }) => {
  const animationDelay = `${index * 0.1}s`;

  const getStars = (rating: number) => {
    const starsTotal = 5;
    const starPercentage = (rating / 10) * starsTotal;
    const starsFull = Math.floor(starPercentage);
    const hasHalfStar = starPercentage % 1 >= 0.5;
    
    let stars = [];
    
    // Full stars
    for (let i = 0; i < starsFull; i++) {
      stars.push(<Star key={`full-${i}`} className="fill-[#ffd700] text-[#ffd700]" size={14} />);
    }
    
    // Half star
    if (hasHalfStar) {
      stars.push(<Star key="half" className="fill-[#ffd700] text-[#ffd700] opacity-50" size={14} />);
    }
    
    // Empty stars
    const emptyStars = starsTotal - starsFull - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="text-[#ffd700]" size={14} />);
    }
    
    return <div className="flex">{stars}</div>;
  };

  return (
    <div 
      className="movie-card bg-[#1e1e1e] rounded-xl overflow-hidden flex flex-col h-full relative animate-fade-in"
      style={{ animationDelay }}
      onClick={onClick}
    >
      <div className="h-[380px] overflow-hidden relative group">
        <img 
          src={movie.poster} 
          alt={movie.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <span className="text-sm font-medium bg-[#8a2be2] py-1 px-3 rounded-full shadow-lg">Ver detalles</span>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-3 leading-tight line-clamp-1 group-hover:text-[#8a2be2] transition-colors">{movie.title}</h3>
        
        <div className="flex justify-between mb-4">
          <div className="flex flex-col items-center">
            <span className="text-xs text-white/80 mb-1">Michel</span>
            <div className="star-rating">{getStars(movie.michel_rating)}</div>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs text-white/80 mb-1">Brayhant</span>
            <div className="star-rating">{getStars(movie.brayhant_rating)}</div>
          </div>
        </div>
        
        <p className="text-sm text-white/70 line-clamp-3 mb-2 mt-auto leading-relaxed">
          {movie.synopsis}
        </p>
        <span className="text-[#8a2be2] text-sm cursor-pointer hover:underline transition-all">Leer más</span>
      </div>
    </div>
  );
};

export default MovieCard;