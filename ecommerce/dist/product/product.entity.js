"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const typeorm_1 = require("typeorm");
const crypto_1 = require("crypto");
const nestjs_seeder_1 = require("nestjs-seeder");
let Product = class Product {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Product.prototype, "Id", void 0);
__decorate([
    (0, nestjs_seeder_1.Factory)(faker => faker.lorem.words(2)),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "Name", void 0);
__decorate([
    (0, nestjs_seeder_1.Factory)(faker => faker.lorem.words(10)),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "Description", void 0);
__decorate([
    (0, nestjs_seeder_1.Factory)(faker => faker.image.imageUrl()),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "Image", void 0);
__decorate([
    (0, nestjs_seeder_1.Factory)(faker => (0, crypto_1.randomInt)(10, 100)),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Product.prototype, "Price", void 0);
Product = __decorate([
    (0, typeorm_1.Entity)()
], Product);
exports.Product = Product;
//# sourceMappingURL=product.entity.js.map