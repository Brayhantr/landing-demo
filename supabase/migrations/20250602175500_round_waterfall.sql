/*
  # Create movies table

  1. New Tables
    - `movies`
      - `id` (uuid, primary key)
      - `created_at` (timestamptz)
      - `title` (text)
      - `poster` (text)
      - `synopsis` (text)
      - `michel_rating` (double precision)
      - `brayhant_rating` (double precision)
      - `trailer_url` (text)
      - `youtube_id` (text)

  2. Security
    - Enable RLS on `movies` table
    - Add policy for authenticated users to insert movies
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS movies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  title text NOT NULL,
  poster text NOT NULL,
  synopsis text NOT NULL,
  michel_rating double precision NOT NULL,
  brayhant_rating double precision NOT NULL,
  trailer_url text,
  youtube_id text,
  CONSTRAINT rating_range CHECK (
    michel_rating >= 0 AND 
    michel_rating <= 10 AND 
    brayhant_rating >= 0 AND 
    brayhant_rating <= 10
  )
);

-- Enable Row Level Security
ALTER TABLE movies ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow authenticated users to insert movies"
  ON movies
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow public read access"
  ON movies
  FOR SELECT
  TO public
  USING (true);