import { SalesRepostories } from "../../repositories/SaleRepository";
import { getCustomRepository } from "typeorm";

export class DeleteSaleService {
    async execute(id: any) {
        const saleRepository = getCustomRepository(SalesRepostories);

        const saleAlreadyExists = saleRepository.findOne(id);

        if (!saleAlreadyExists) {
            throw new Error("Venda não existe");
        }
        return await saleRepository.delete(id);
    }
}