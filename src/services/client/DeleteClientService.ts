import { getCustomRepository } from "typeorm";
import { ClientsRepostories } from "../../repositories/ClientRepository";

export class DeleteClientService {

    async execute(id: any) {
            const clientRepository = getCustomRepository(ClientsRepostories);
    
            const clientAlreadyExists = clientRepository.findOne(id);
    
            if (!clientAlreadyExists) {
                throw new Error("Produto não existe");
            }
            return await clientRepository.delete(id);
}
}

