import { IProductRequest } from "../../interfaces/IProductRequest";
import { getCustomRepository } from "typeorm";
import { ProductsRepostories } from "../../repositories/ProductRepository";

class UpdateProductService {
    async execute({ id, name, EAN, price, description, categoryId }: IProductRequest) {

        const productRepository = getCustomRepository(ProductsRepostories);

        // Busca o produto pelo id
        const product = await productRepository.findOne({ where: { id } });
        if (!product) {
            throw new Error("Produto não encontrado");
        }

        // Verifica se já existe outro produto com o mesmo nome
        const productWithSameName = await productRepository.findOne({ where: { name } });
        if (productWithSameName && productWithSameName.id !== id) {
            throw new Error("Já existe outro produto com esse nome");
        }

        // Atualiza os campos
        product.name = name;
        product.EAN = EAN;
        product.price = price;
        product.description = description;
        product.categoryId = categoryId;

        await productRepository.save(product);

        return product;
    }
}

export { UpdateProductService };