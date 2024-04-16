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
