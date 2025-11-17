import { getCustomRepository } from "typeorm";
import { IProductRequest } from "../../interfaces/IProductRequest";
import { ProductsRepostories } from "../../repositories/ProductRepository";

export class CreateProductService {
    async execute({ name, EAN, price, description, categoryId }: IProductRequest) {
        if (!name) {
            throw new Error("Dados incorretos");
        }

        const productRepository = getCustomRepository(ProductsRepostories);

        const productAlreadyExists = await productRepository.findOne({where: { name}});
        if (productAlreadyExists){
            throw new Error("Produto já existe");

        }
        const product = productRepository.create({name, EAN, price, description, categoryId});
        await productRepository.save(product);

        return product;
    }
}
