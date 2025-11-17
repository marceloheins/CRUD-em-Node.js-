import { ISaleRequest } from "../../interfaces/ISaleRequest";
import { getCustomRepository } from "typeorm";
import { SalesRepostories } from "../../repositories/SaleRepository";

export class UpdateSaleService {
    async execute({ id, value, discount, productId, clientId }: ISaleRequest) {
        if (value < 0) {
            throw new Error("Valor da venda não pode ser negativo");
        }

        const saleRepository = getCustomRepository(SalesRepostories);

        // Busca a venda pelo id
        const sale = await saleRepository.findOne({ where: { id } });
        if (!sale) {
            throw new Error("Venda não encontrada");
        }

        // Regra: não pode atualizar para venda sem produto ou cliente
        if (!productId || !clientId) {
            throw new Error("Produto e cliente são obrigatórios");
        }

        // Atualiza os campos
        sale.value = value;
        sale.discount = discount;
        sale.productId = productId;
        sale.clientId = clientId;

        await saleRepository.save(sale);

        return sale;
    }
}