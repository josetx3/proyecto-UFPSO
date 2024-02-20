export interface UserRequest {
  name: string;
  password: string;
  password_confirm: string;
  profile_image: string;
  person: Person;
}

export interface Person {
  name: string;
  lastname: string;
  document_type_id: string;
  document_number: string;
  phone: string;
  email: string;
  value_direction: string;
  birthdate: string;
  user_newsletter: boolean;
  city: string;
}

export interface UserPerson {
  person: Person,
  user: UserRequest
}
