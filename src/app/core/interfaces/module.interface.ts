/*---- Module and Permission ---*/
export interface Module {
  module_id: string;
  module_name: string;
  module_icon: string;
  module_route: string;
  module_order: number;
  module_description: string;
  permissions: Permission[];
}

/*---- Role and Permission ---*/
export interface Permission {
  permission_id: string;
  permission_name: string;
  permission_title: string;
  permission_checked?: boolean;
}

export interface RolePermission {
  role_permission_id: string;
  permissions: Permission
}

export interface RoleResponse {
  commerce_id: string;
  role_id: string;
  role_name: string;
  role_active: string;
  permissions: RolePermission[]
}

export interface PermissionId {
  permission_id: string;
}

export interface CreateRol {
  role_name: string;
}
