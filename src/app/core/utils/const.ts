import { Dimension, Select } from '@app/core/interfaces/select.interface';
import { TableActions } from '@app/core/interfaces/table.interface';

export const PRODUCT_CONDITION: Select[] = [
  { value: 'Nuevo', label: 'Nuevo' },
  { value: 'Usado', label: 'Usado' },
];

export const TYPE_PRODUCT: Select[] = [
  { value: 'Fisico', label: 'Fisico' },
]

export const STATUS_PRODUCT: Select[] = [
  { value: true, label: 'Activo' },
  { value: false, label: 'Inactivo' },
]

export const STATUS_USER_AUTHENTICATED: Select[] = [
  { value: 'Activo', label: 'Activo' },
  { value: 'Inactivo', label: 'Inactivo' },
  { value: 'Bloqueado', label: 'Bloqueado' },
]

export const STATUS_CATEGORY: Select[] = [
  { value: 'Activa', label: 'Activa' },
  { value: 'Inactiva', label: 'Inactiva' },
]

export const TYPE_OFFER: Select[] = [
  { value: 'Oferta por Productos', label: 'Oferta por Productos' },
  { value: 'Oferta por Categoria', label: 'Oferta por Categoria' },
]

export enum typeOffer {
  Producto = 'Oferta por Productos',
  Categoria = 'Oferta por Categoria',
}

export const TABLE_ACTIONS: TableActions = {
  add: false,
  search: false,
  edit: {
    can: false,
  },
  delete: {
    can: false,
  },
  view: {
    can: false,
  },
}

export const ORDER: { [key: string]: string } = {
  'asc': 'ASC',
  'desc': 'DESC',
  '': 'NONE',
};

export const TYPE_COUPON: Select[] = [
  { value: 'Categoria', label: 'Categoria' },
  { value: 'Producto', label: 'Producto' },
  { value: 'General', label: 'General' },
]

export const TYPE_NEWSLETTER: Select[] = [
  { value: 'General', label: 'General' },
  { value: 'Cupon', label: 'Cupón' },
]

export const TYPE_NEWSLETTER_GENERAL: Select[] = [
  { value: 'General', label: 'General' }
]

export const SEND_TO_NEWSLETTER: Select[] = [
  { value: 'Clientes', label: 'Clientes' },
  { value: 'Comercios', label: 'Comercios' },
  { value: 'Todos', label: 'Todos' },
]
export const SEND_TO_NEWSLETTER_CLIENT: Select[] = [
  { value: 'Clientes', label: 'Clientes' },
]

export const IMAGE_lOGO_EXTENSIONS: String[] = ['image/png', 'image/jpg', 'image/jpeg', 'image/webp'];
export const IMAGE_lOGO_DIMENSION: Dimension = { width: 4314, height: 2857 };
export const IMAGE_PROFILE_DIMENSION: Dimension = { width: 4314, height: 2857 };
export const IMAGE_lOGO_SIZE: number = 2000000;
export const DEFAULT_DOCUMENT_TYPE = 'Cédula de identidad';

export enum statusOrder {
  SENT = 'ENVIADO',
  RECEIVED = 'RECIBIDO',
  ORDER_CONFIRMED = 'ORDEN_CONFIRMADA'
}

export enum attentionSchedule {
  DIURNAL = 'Diurno',
  NIGHTLY = 'Nocturno',
  HOURS = '24 Horas'
}

export enum attentionDay {
  SCHEDULE_1 = 'Lunes a viernes',
  SCHEDULE_2 = 'Lunes a sábado',
  SCHEDULE_3 = 'Lunes a domingo'
}
