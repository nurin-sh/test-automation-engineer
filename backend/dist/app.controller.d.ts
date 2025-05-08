import { AppService } from './app.service';
import { CreateProductDto } from './products/dto/create-product.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    createProduct(createProductDto: CreateProductDto): {
        message: string;
        product: CreateProductDto;
    };
}
