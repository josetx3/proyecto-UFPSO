export interface UserAuth {
  user_id: string;
  token_jwt: string;
  type_token: string;
  refresh_token: string;
  user_data: UserDataAuth;
  user_module: UserModule[];
  user_permission: UserPermission[];
}

export interface UserModule {
  module_name: string;
  ico: string;
  description: string;
  route: string;
  order: number;
}

export interface UserPermission {
  permission_name: string;
}

export interface UserDataAuth {
  administrator: boolean;
  profile_image: string;
  user_name: string;
  user_lastname: string;
}
