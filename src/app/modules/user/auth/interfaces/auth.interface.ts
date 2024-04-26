export interface TokenRefreshRequest {
  refresh_token: string,
}

export interface TokenRefreshResponse {
  access_token: string,
  refresh_token: string,
  token_type: string,
}

export interface AuthUser {
  user_id: string;
  user_name: string;
  is_administrator: boolean;
  user_status: string;
  user_profile_image: string;
  person_name: string;
  person_last_name: string;
  person_document_number: string;
  person_phone: string;
  person_email: string;
  person_direction: string;
  person_birthdate: Date;
  person_city: string;
}

export interface AuthModule {
  module_id: string;
  name: string;
  description: string;
  module_icon: string;
  module_order: number;
  module_route: string;
}

export interface AuthModuleTest {
  module_id: string;
  module_name: string;
  module_description: string;
  module_icon: string;
  module_route: string;
  module_order: number;
}

export interface AuthPermission {
  name: string;
}
