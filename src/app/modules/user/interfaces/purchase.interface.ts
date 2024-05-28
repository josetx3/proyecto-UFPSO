export interface Chairs {
  column: string;
  occupied_place_to_sit: boolean;
  place_to_sit_id: string;
  row: string;
  status_place_to_sit: boolean;
}

export interface Foods {
  food_id: string;
  food_img: string;
  food_name: string;
  food_price: number;
  food_variant: string;
  food_quantity: number;
}
