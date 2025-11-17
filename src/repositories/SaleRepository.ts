import { EntityRepository, Repository } from "typeorm";
import { Sale } from "../entities/Sale";

@EntityRepository(Sale)
export class SalesRepostories extends Repository<Sale> {}
