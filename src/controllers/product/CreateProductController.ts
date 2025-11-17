import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";
import { ProductsRepostories } from "../../repositories/ProductRepository";
import { getCustomRepository } from "typeorm";

class CreateProductController {
    async handle(request: Request, response: Response) {
        const createProductService = new CreateProductService();

        const { name, EAN, price, description, categoryId } = request.body;


         const productRepository = getCustomRepository(ProductsRepostories);
        
                const existingProduct = await productRepository.findOne({where: {name }});
                if (existingProduct) {
                    return response.status(400).json({ error: "Produto já existe" });
                } 
                
        const product = { name, EAN, price, description, categoryId };

        const resp = await createProductService.execute(product);

        response.json({ message: "Registro incluido com Sucesso", data: resp });
    }
}

export { CreateProductController };
