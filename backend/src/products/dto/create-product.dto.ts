import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateProductDto {
  @ApiProperty(
    {
      type: String,
      description: 'The name of the product',
      required: true,
      default: 'Pineapple'
    }
  )
  @IsString()
  name: string;

  @ApiProperty({
    type: String,
    description: 'The description of the product',
    required: true,
    default: 'A fruit that is good for the health'
  })
  @IsString()
  description: string;

  @ApiProperty({
    type: Number,
    description: 'The price of the product',
    required: true,
    default: 12
  })
  @IsNumber()
  price: number;
}
