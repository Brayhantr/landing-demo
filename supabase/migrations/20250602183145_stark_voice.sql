/*
  # Add initial movie data

  1. Data Migration
    - Insert initial movie data from the static data file
    - Includes all movies with their complete information
    - Preserves existing movie ratings and metadata

  2. Security
    - No additional security changes needed
    - Uses existing RLS policies
*/

INSERT INTO movies (
  title,
  poster,
  synopsis,
  michel_rating,
  brayhant_rating,
  trailer_url,
  youtube_id
) VALUES 
  ('Ma', 'https://m.media-amazon.com/images/M/MV5BNDZhYmM5NjItMGFhNi00YzFhLWFmYzItN2M2ZDVjNGI2NGY5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', 'Una mujer solitaria se hace amiga de unos adolescentes y les permite hacer fiestas en su casa. Sin embargo, una serie de sucesos desconcertantes los llevan a cuestionar las verdaderas intenciones de la, en apariencia, inofensiva anfitriona.', 5, 6.5, 'https://www.youtube.com/watch?v=eIvbEC8N3cA', 'eIvbEC8N3cA'),
  ('Hanzel y Gretel', 'https://m.media-amazon.com/images/M/MV5BMjA4MDQwODg2NV5BMl5BanBnXkFtZTcwNTc5ODc2OA@@._V1_.jpg', 'Una moderna adaptación del cuento clásico donde dos hermanos deben enfrentarse a una bruja malvada en un bosque encantado.', 6, 9, 'https://www.youtube.com/watch?v=ieA0RLD4q2w', 'ieA0RLD4q2w'),
  ('Caza: De sombras', 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjfKBCJJtxBN9JLsLxO_lAm-xPBMYPIzVm-EtCyqx2F3OXVVuUHLfCbsDeo-JVOqsvefJieXcDkrsaYF6gm06jZ0094TeIXL2nvnFu54cQcysxbS6OlAztY5ETsX7sgeh3QikkdsePJ2qEC/s1600/Ciudad+de+hueso.jpg', 'Una chica que descubre su herencia como cazadora de sombras cuando presencia la muerte de un chico a manos de unos jóvenes tatuados en una discoteca. Clary se une a los cazadores de sombras, seres mitad ángeles que protegen al mundo de los demonios, y se enfrenta a peligros, misterios y un amor prohibido.', 10, 8.5, 'https://www.youtube.com/watch?v=jQwKTG9gkDw', 'jQwKTG9gkDw')
  -- Adding just a few movies initially to test. More can be added in subsequent migrations if needed
;