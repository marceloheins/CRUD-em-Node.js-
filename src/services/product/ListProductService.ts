import { getCustomRepository } from "typeorm";
import { ProductsRepostories } from "../../repositories/ProductRepository";

class ListProductService {
    async execute() {
        const productsRepostories = getCustomRepository(ProductsRepostories);

        const products = await productsRepostories.find();

        return products;
    }
}
export { ListProductService };
