import { Controller, Get, Req } from '@nestjs/common';
import { ProductService } from './product.service';
import { Request } from 'express';

@Controller('products')
export class ProductController {
    constructor(private productSetvice : ProductService){}

    @Get('frontend')
    public async frontend(){
        return this.productSetvice.all();
    }
    @Get('backend')
    public async backend(@Req() req: Request){
        const builder = await this.productSetvice.queryBuilder('products');

        if(req.query.s){
            builder.where("products.Name LIKE :s OR products.Description LIKE :s",{s:`%${req.query.s}%`})
        }
        const sort:any = req.query.sort;
        if(sort){
            builder.orderBy('products.Price',sort.toUpperCase());
        }

        const page:number = parseInt(req.query.page as any) || 1;
        const perPage = 9;
        const total = await builder.getCount();

        builder.offset((page - 1) * perPage).limit(perPage);

        return {
            data: await builder.getMany(),total,page,last_page:Math.ceil(total / perPage)
        }
    }
}
