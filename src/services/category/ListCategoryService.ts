
import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../../repositories/CategoryRepository";

class ListCategoryService {
    async execute() {
        const categoriesRepostories = getCustomRepository(CategoryRepository);

        const products = await categoriesRepostories.find();

        return products;
    }
}
export { ListCategoryService };
