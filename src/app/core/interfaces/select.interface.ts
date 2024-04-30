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

export interface Tag {
  tag_id: string;
  value: string;
}

export interface Currency {
  currency_id: string;
  currency_is_default: boolean;
  currency_iso: string;
}

export interface GenderMovie {
  gender_id: string;
  gender_name: string;
  gender_description: string;
}

export interface LanguageMovie {
  language_id: string;
  language_name: string;
  description: string;
}

export interface CountryMovie {
  country_id: string;
  countryName: string;
}
