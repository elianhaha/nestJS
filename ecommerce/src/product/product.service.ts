import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
    constructor(@InjectRepository(Product) private readonly productRepository: Repository<Product> ){}

    public async all():Promise<Product[]>{
        return this.productRepository.find();
    }
    public async queryBuilder(alias:string){
        return this.productRepository.createQueryBuilder(alias); 
    }
}
