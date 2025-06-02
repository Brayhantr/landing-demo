/*
  # Update movies table column names to snake_case

  1. Changes
    - Rename columns to follow snake_case convention:
      - michelRating -> michel_rating
      - brayhantRating -> brayhant_rating
      - trailerUrl -> trailer_url
      - youtubeId -> youtube_id

  2. Security
    - Existing RLS policies are preserved
*/

ALTER TABLE movies 
  RENAME COLUMN "michelRating" TO michel_rating;

ALTER TABLE movies 
  RENAME COLUMN "brayhantRating" TO brayhant_rating;

ALTER TABLE movies 
  RENAME COLUMN "trailerUrl" TO trailer_url;

ALTER TABLE movies 
  RENAME COLUMN "youtubeId" TO youtube_id;

-- Update the rating constraint
ALTER TABLE movies 
  DROP CONSTRAINT rating_range;

ALTER TABLE movies 
  ADD CONSTRAINT rating_range 
  CHECK (michel_rating >= 0 AND michel_rating <= 10 AND brayhant_rating >= 0 AND brayhant_rating <= 10);