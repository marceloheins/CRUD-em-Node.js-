import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

class CreateCategoryController {
    async handle(request: Request, response: Response) {
        const { name, description } = request.body;

        

        const createCategoryService = new CreateCategoryService();
        await createCategoryService.execute({name, description});

        response.json({message: "Registrado com sucesso"});

        
    };
  
}
export { CreateCategoryController };
