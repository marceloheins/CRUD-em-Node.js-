

import { getCustomRepository } from "typeorm";
import { ClientsRepostories } from "../../repositories/ClientRepository";

class ListClientService {
    async execute() {
        const clientsRepostories = getCustomRepository(ClientsRepostories);

        const clients = await clientsRepostories.find();

        return clients;
    }
}
export { ListClientService };