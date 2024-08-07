import { IsNumber, IsString } from "class-validator";

export class CreateOrderDto {
    @IsNumber()
    product_id: number;
    @IsNumber()
    quantity: number;
    @IsNumber()
    total: number;
    @IsString()
    created_at: string;
    @IsString()
    updated_at: string;
}
