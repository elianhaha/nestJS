import { Seeder } from "nestjs-seeder";
import { Product } from "./product.entity";
import { Repository } from "typeorm";
export declare class ProductSeeder implements Seeder {
    private readonly productRepo;
    constructor(productRepo: Repository<Product>);
    drop(): Promise<any>;
    seed(): Promise<any>;
}
