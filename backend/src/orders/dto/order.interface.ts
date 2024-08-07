import { Order } from "../entities/order.entity";

export interface OrderInterface {
    id: number;
    product_id: number;
    quantity: number;
    total: number;
    created_at: string;
    updated_at: string;
}