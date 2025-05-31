import { createClient } from '@supabase/supabase-js';
import { moviesWithYoutubeIds } from '../data/movies';
import type { Movie } from '../types';

// For development, we'll use the local data
// Replace these with your actual Supabase credentials when ready
const supabaseUrl = 'https://example.supabase.co';
const supabaseKey = 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function getMovies(): Promise<Movie[]> {
  // For development, return the local data
  return moviesWithYoutubeIds;
}

export async function addMovie(movie: Movie): Promise<Movie | null> {
  // For development, simulate adding to database
  const newMovie = {
    ...movie,
    youtubeId: movie.trailerUrl ? getYoutubeId(movie.trailerUrl) : undefined
  };
  
  moviesWithYoutubeIds.push(newMovie);
  return newMovie;
}

// Helper function to extract YouTube ID from URL
function getYoutubeId(url: string): string {
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
}