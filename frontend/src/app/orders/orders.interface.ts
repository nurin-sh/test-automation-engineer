export interface Orders {
  id: number;
  product_name: number;
  price: number;
  quantity: number;
  total: number;
  created_at: string;
  updated_at: string;
}

export interface CreateOrder {
  product_id: number;
  quantity: number;
  updated_at: string;
  created_at: string;
}
