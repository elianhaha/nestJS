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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
let ProductController = class ProductController {
    constructor(productSetvice) {
        this.productSetvice = productSetvice;
    }
    async frontend() {
        return this.productSetvice.all();
    }
    async backend(req) {
        const builder = await this.productSetvice.queryBuilder('products');
        if (req.query.s) {
            builder.where("products.Name LIKE :s OR products.Description LIKE :s", { s: `%${req.query.s}%` });
        }
        const sort = req.query.sort;
        if (sort) {
            builder.orderBy('products.Price', sort.toUpperCase());
        }
        const page = parseInt(req.query.page) || 1;
        const perPage = 9;
        const total = await builder.getCount();
        builder.offset((page - 1) * perPage).limit(perPage);
        return {
            data: await builder.getMany(), total, page, last_page: Math.ceil(total / perPage)
        };
    }
};
__decorate([
    (0, common_1.Get)('frontend'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "frontend", null);
__decorate([
    (0, common_1.Get)('backend'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "backend", null);
ProductController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map