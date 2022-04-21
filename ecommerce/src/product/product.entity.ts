import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { randomInt } from "crypto";
import {Factory} from "nestjs-seeder";

@Entity()
export class Product{

    @PrimaryGeneratedColumn()
    public Id: number;

    @Factory(faker => faker.lorem.words(2))
    @Column()
    public Name:string;

    @Factory(faker => faker.lorem.words(10))
    @Column()
    public Description:string;

    @Factory(faker => faker.image.imageUrl())
    @Column()
    public Image:string;

    @Factory(faker => randomInt(10,100))
    @Column()
    public Price:number;
}