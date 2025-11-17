import { ISaleRequest } from "../../interfaces/ISaleRequest";
import { getCustomRepository } from "typeorm";
import { SalesRepostories } from "../../repositories/SaleRepository";

export class CreateSaleService {
    async execute({ value, discount, productId, clientId }: ISaleRequest) {
        if (value < 0) {
            throw new Error("Valor da venda não pode ser negativo");
        }

        const saleRepository = getCustomRepository(SalesRepostories);

        // Regra: não pode haver venda sem produto ou cliente
        if (!productId || !clientId) {
            throw new Error("Produto e cliente são obrigatórios");
        }

        const sale = saleRepository.create({ value, discount, productId, clientId });
        await saleRepository.save(sale);

        return sale;
    }
}
