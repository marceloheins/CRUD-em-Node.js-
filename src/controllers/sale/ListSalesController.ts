import { Request, Response } from "express";
import { ListSalesService } from "../../services/sale/ListSaleService";

export class ListSalesController {
    async handle(request: Request, response: Response) {
        const listSaleService = new ListSalesService();

        const sales = await listSaleService.execute();

        response.json({ sales });
    }
}
