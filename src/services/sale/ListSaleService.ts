import { getCustomRepository } from "typeorm";
import { SalesRepostories } from "../../repositories/SaleRepository";

class ListSalesService {
    async execute() {
        const salesRepostories = getCustomRepository(SalesRepostories);

        const sales = await salesRepostories.find();

        return sales;
    }
}
export { ListSalesService };