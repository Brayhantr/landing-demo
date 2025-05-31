import { createClient } from '@supabase/supabase-js';
import type { Movie } from '../types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function getMovies(): Promise<Movie[]> {
  const { data, error } = await supabase
    .from('movies')
    .select('*')
    .order('created_at', { ascending: false });

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