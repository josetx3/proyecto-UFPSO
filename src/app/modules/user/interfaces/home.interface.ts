export interface Movie {
  movie_id: string,
  movie_name: string,
  movie_category?: MovieCategory[],
  movie_rating: number,
  movie_img: string,
  movie_trailer: string,
  movie_date: string,
  movie_duration: string,
  movie_animation: string,
  movie_text: string,
  movie_times?: MovieTimes[],
  movie_status: string,
  movie_home: boolean,
}

export interface MovieTimes {
  movie_time_id: string,
  movie_time_hour: string,
}

export interface MovieCategory {
  category_id: string,
  category_name: string
}

export interface Food {
  food_id: number,
  food_img: string,
  food_name: string,
  food_price: number,
  food_offer: number,
  food_additional: string,
  food_status: string,
}

export interface MovieCard {
  movie_id: string;
  movie_image: string;
  movie_trailer: string;
  movie_name_spanish: string;
  movie_name_english: string;
  movie_release_date: Date;
  movie_gender: string[];
  movie_classification: string;
  movie_duration: number;
  movie_availability: string;
}

export interface MovieInfoId {
  movie_id: string;
  movie_image: string;
  movie_trailer: string;
  movie_name_spanish: string;
  movie_name_english: string;
  movie_release_date: Date;
  movie_gender: string[];
  movie_description: string;
  movie_classification: string;
  movie_duration: number;
  movie_availability: string;
  movie_country: string;
  movie_director: string;
  movie_actor: string;
  movie_languages: string[];
  movie_schedule: MovieSchedule[];
}

export interface MovieSchedule {
  movie_schedule_id: string;
  movie_presentation_date: Date;
  movie_presentation_start_time: string[];
  movie_price: number;
  movie_video_quality: string;
}
