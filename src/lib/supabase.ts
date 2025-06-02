import { createClient } from '@supabase/supabase-js';
import type { Movie } from '../types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function getMovies(): Promise<Movie[]> {
  try {
    const { data, error } = await supabase
      .from('movies')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching movies:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error in getMovies:', error);
    return [];
  }
}

export async function addMovie(movie: Movie): Promise<Movie | null> {
  try {
    // Extract YouTube ID from trailer URL if provided
    const youtubeId = movie.trailer_url ? getYoutubeId(movie.trailer_url) : undefined;

    const movieToAdd = {
      ...movie,
      youtube_id: youtubeId
    };

    const { data, error } = await supabase
      .from('movies')
      .insert([movieToAdd])
      .select()
      .single();

    if (error) {
      console.error('Error adding movie:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error in addMovie:', error);
    return null;
  }
}

function getYoutubeId(url: string): string | undefined {
  try {
    const urlObj = new URL(url);
    if (urlObj.hostname === 'www.youtube.com' && urlObj.searchParams.has('v')) {
      return urlObj.searchParams.get('v') || undefined;
    } else if (urlObj.hostname === 'youtu.be') {
      return urlObj.pathname.substring(1);
    }
    return undefined;
  } catch (error) {
    console.error('Error parsing YouTube URL:', error);
    return undefined;
  }
}