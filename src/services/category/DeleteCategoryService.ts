import { CategoryRepository } from "../../repositories/CategoryRepository";
import { getCustomRepository } from "typeorm";
 
export class DeleteCategoryService {
    async execute(id: string) {
        const categoryRepository = getCustomRepository(CategoryRepository);

        const categoryAlreadyExists = categoryRepository.findOne({where :{id}});

        if (!categoryAlreadyExists) {
            throw new Error("Categoria não existe");
        }
         

         return await categoryRepository.delete(id);
    }
}