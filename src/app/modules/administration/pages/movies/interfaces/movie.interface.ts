export interface RegisterMovie {
  movie_name_spanish: string;
  movie_name_english: string;
  movie_description: string;
  movie_trailer: string;
  movie_actors: string;
  movie_release_date: string;
  movie_duration: string;
  movie_classification: string;
  movie_availability: string;
  movie_director: string;
  origin_country: string;
  image: string;
  gender_movie: string[];
  language_movie: string[];
}


export interface DataMovieTable {
  movie_id: string;
  movie_status: boolean;
  movie_duration: number;
  movie_name_spanish: string;
  movie_classification: string;
}


export interface MovieSchedule {
  movie_id?: string;
  movie_schedule_price: number;
  movie_schedule_presentation: any;
  movie_schedule_video_quality: string;
}
