/*---- Selects ---*/
export interface Select {
  value: string | boolean,
  label: string
}

export interface Dimension {
  width: number,
  height: number
}

/*---- Document type ---*/
export interface DocumentType {
  document_type_id: string;
  code: string;
  document_name: string;
}

export interface SubCategory {
  sub_category_id: string;
  sub_category_name: string;
  sub_category_status: string;
  category_id: string;
  category_name: string;
}

export interface Tag {
  tag_id: string;
  value: string;
}

export interface Currency {
  currency_id: string;
  currency_is_default: boolean;
  currency_iso: string;
}

export interface Variant {
  variant_id: string;
  variant_type: string;
  variant_value: string;
}

export interface ProductWithoutOffer{
  product_description: string;
  product_id: string;
  product_name: string;
}
