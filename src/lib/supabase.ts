import { createClient } from '@supabase/supabase-js';
import type { Movie } from '../types';

// Using temporary values for development - replace these with your actual Supabase credentials
const supabaseUrl = 'https://xyzcompany.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtdGt4eHh4eHh4eHh4eHh4eHgiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTcwMjU4MDAwMCwiZXhwIjoxODYwMzQwMDAwfQ.temporary-key';

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