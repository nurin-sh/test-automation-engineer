import { CreateProductDto } from "./create-product.dto";

export interface ProductsInterface extends CreateProductDto{
    id: number;
}