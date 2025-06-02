export interface Movie {
  id?: string;
  created_at?: string;
  title: string;
  poster: string;
  michel_rating: number;
  brayhant_rating: number;
  synopsis: string;
  trailer_url?: string;
  youtube_id?: string;
}