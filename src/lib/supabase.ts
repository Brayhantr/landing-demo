import { createClient } from '@supabase/supabase-js';
import type { Movie } from '../types';

const supabaseUrl = 'https://your-project-url.supabase.co';
const supabaseKey = 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function getMovies(): Promise<Movie[]> {
  const { data, error } = await supabase
    .from('movies')
    .select('*');

  if (error) {
    console.error('Error fetching movies:', error);
    return [];
  }

  return data || [];
}

export async function addMovie(movie: Movie): Promise<Movie | null> {
  const { data, error } = await supabase
    .from('movies')
    .insert([movie])
    .select()
    .single();

  if (error) {
    console.error('Error adding movie:', error);
    return null;
  }

  return data;
}