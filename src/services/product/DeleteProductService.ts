import { getCustomRepository } from "typeorm";
import { ProductsRepostories } from "../../repositories/ProductRepository";


export class DeleteProductService {
    async execute(id: any) {
        const productRepository = getCustomRepository(ProductsRepostories);

        const productAlreadyExists = productRepository.findOne(id);

        if (!productAlreadyExists) {
            throw new Error("Produto não existe");
        }
        return await productRepository.delete(id);
    }
}