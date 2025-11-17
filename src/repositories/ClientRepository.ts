import { EntityRepository, Repository } from "typeorm";
import { Client } from "../entities/Client";

@EntityRepository(Client)
export class ClientsRepostories extends Repository<Client> {}
