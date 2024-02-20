/*---- Table ---*/
export interface TableColumn {
  name: string;
  key: string;
  table?: string;
  isSortable?: boolean;
  isFilterable?: boolean;
  type: 'text' | 'status' | 'statusName' | 'statusIf' | 'dateTime' | 'textLogoFranchise' | 'currency' | 'requestType' | 'payments' | 'date' | 'portalType' | 'number' | 'statusCommerce' | 'percentage';
}

export interface TableActions {
  add: boolean,
  search: boolean,
  edit: Action,
  delete: Action,
  view: Action,
  unlock?: boolean,
  active?: boolean,
  suspended?: boolean
}

export interface Action {
  can: boolean,
  key?: string,
  can_when_status?: string[]
}

/*** --- Criteria --- ***/

export interface Filter {
  key: string,
  operator: string,
  value: string
}

export interface Order {
  order_by: string,
  order_type: string;
}

export interface Pagination {
  limit: number,
  offset: number
}


