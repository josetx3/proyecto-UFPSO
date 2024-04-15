export interface Movie {
  movie_id: number,
  movie_name: string,
  movie_category: string,
  movie_rating: number,
  movie_img: string,
  movie_date: string,
  movie_duration: string,
  movie_text: string,
  movie_times: string,
  movie_status: string,
  movie_home: boolean
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
