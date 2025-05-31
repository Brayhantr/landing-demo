/*
  # Create movies table for CineFans application

  1. New Tables
    - `movies`
      - `id` (uuid, primary key)
      - `created_at` (timestamptz)
      - `title` (text)
      - `poster` (text)
      - `synopsis` (text)
      - `michelRating` (float8)
      - `brayhantRating` (float8)
      - `trailerUrl` (text, nullable)
      - `youtubeId` (text, nullable)

  2. Security
    - Enable RLS on `movies` table
    - Add policies for:
      - Public read access to all movies
      - Authenticated users can insert new movies
*/

-- Create the movies table
CREATE TABLE IF NOT EXISTS movies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  title text NOT NULL,
  poster text NOT NULL,
  synopsis text NOT NULL,
  "michelRating" float8 NOT NULL,
  "brayhantRating" float8 NOT NULL,
  "trailerUrl" text,
  "youtubeId" text,
  CONSTRAINT rating_range CHECK ("michelRating" >= 0 AND "michelRating" <= 10 AND "brayhantRating" >= 0 AND "brayhantRating" <= 10)
);

-- Enable Row Level Security
ALTER TABLE movies ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Allow public read access"
  ON movies
  FOR SELECT
  TO public
  USING (true);

-- Create policy for authenticated users to insert movies
CREATE POLICY "Allow authenticated users to insert movies"
  ON movies
  FOR INSERT
  TO authenticated
  WITH CHECK (true);