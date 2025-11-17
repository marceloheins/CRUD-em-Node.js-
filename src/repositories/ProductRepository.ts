import { EntityRepository, Repository } from "typeorm";
import { Product } from "../entities/Product";

@EntityRepository(Product)
export class ProductsRepostories extends Repository<Product> {}
