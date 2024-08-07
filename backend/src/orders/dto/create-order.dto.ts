import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateOrderDto {


    @ApiProperty(
        {
            type: Number,
            description: 'The id of the order',
            required: true,
            default: 1
        }
    )
    @IsNumber()
    product_id: number;

    @ApiProperty(
        {
            type: Number,
            description: 'Quantity of the product',
            required: true,
            default: 1
        }
    )
    @IsNumber()
    quantity: number;

    @ApiProperty(
        {
            type: Number,
            description: 'DateTime',
            required: true,
            default: new Date().toISOString()
        }
    )
    @IsString()
    created_at: string;

    @ApiProperty(
        {
            type: Number,
            description: 'DateTime',
            required: true,
            default: new Date().toISOString()
        }
    )
    @IsString()
    updated_at: string;
}
