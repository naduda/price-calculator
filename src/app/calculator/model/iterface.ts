export enum EType {
  ONE = 'ONE',
  METER = 'METER',
  KG = 'KG',
  HOUR = 'HOUR',
}

export interface IComponent {
  id: number;
  name: string;
  unit: EType;
  price: number;
}

export interface ISelectedComponent extends IComponent {
  value: number;
}
