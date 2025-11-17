import { getCustomRepository } from "typeorm";
import { ICategoryRequest } from "../../interfaces/ICategoryRequest";
import { CategoryRepository } from "../../repositories/CategoryRepository";

export class CreateCategoryService {
    async execute({ name, description }: ICategoryRequest) {
        if (!name) {
            throw new Error("Essa categoria já existe");
        }

      const categoryRepository = getCustomRepository(CategoryRepository);

        const categoryAlreadyExists = await categoryRepository.findOne({where: { name}});
        if (categoryAlreadyExists){
            throw new Error("Categoria já existe");

        }
        
      const category = categoryRepository.create({name, description});
      await categoryRepository.save(category);
    }
}
