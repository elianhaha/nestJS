import {seeder} from "nestjs-seeder";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./product.entity";
import { ProductSeeder } from "./product.seeder";

seeder({ 
    imports:[
        TypeOrmModule.forRoot({
            type:'postgres',
            host: 'localhost',
            port:5432,
            username:'postgres',
            password:'kejengemas99',
            database:'apa',
            entities: [Product],
            synchronize:true
        }),
        TypeOrmModule.forFeature([Product])
    ]
}).run([ProductSeeder])