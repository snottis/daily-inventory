export interface ProductCreate {
  name: string;
  gtin: string;
  value: number;
  lotsize: number;
  hidden?: boolean;
}

export interface ProductUpdate {
  name?: string;
  gtin?: string;
  value?: number;
  lotsize?: number;
  hidden?: boolean;
}
