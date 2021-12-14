export interface Product {
  id: number;
  product_name: string;
  description: string;
  style: string;
  brand: string;
  created_at: Date;
  updated_at: Date;
  url: string;
  product_type: string;
  shipping_price: number;
  note: string;
  admin_id: number;
  inventory: Inventory[];
}

export interface Inventory {
  id: number;
  product_id: number;
  quantity: number;
  color: string;
  size: string;
  weight: number;
  price_cents: number;
  sale_price_cents: number;
  cost_cents: number;
  sku: string;
  length: number;
  width: number;
  height: number;
  note: string;
}
