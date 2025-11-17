import { ICategoryRequest } from "../../interfaces/ICategoryRequest";
import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../../repositories/CategoryRepository";

class UpdateCategoryService {
    async execute({ id, name, description }: ICategoryRequest) {
        if (!name) {
            throw new Error("Nome está vazio");
        }

        const categoryRepository = getCustomRepository(CategoryRepository);

        // Busca a categoria pelo id
        const category = await categoryRepository.findOne({ where: { id } });
        if (!category) {
            throw new Error("Categoria não encontrada");
        }

        // Verifica se já existe outra categoria com o mesmo nome
        const categoryWithSameName = await categoryRepository.findOne({ where: { name } });
        if (categoryWithSameName && categoryWithSameName.id !== id) {
            throw new Error("Já existe outra categoria com esse nome");
        }

        // Atualiza os campos
        category.name = name;
        category.description = description;

        await categoryRepository.save(category);

        return category;
    }
}

export { UpdateCategoryService };
