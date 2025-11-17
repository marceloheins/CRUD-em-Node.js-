import { getCustomRepository } from "typeorm";
import { IClientRequest } from "../../interfaces/IClientRequest";
import { ClientsRepostories } from "../../repositories/ClientRepository";

export class CreateClientService {
    async execute({ name, cpf, email, address, zipcode, number, city, state }: IClientRequest) {
        if (!email) {
            throw new Error("Email incorreto");
        }

        const clientRepository = getCustomRepository(ClientsRepostories);

        const clientAlreadyExists = await clientRepository.findOne({where: {cpf}});
        if (clientAlreadyExists){
            throw new Error("Cliente já existe");

        }
        const client = clientRepository.create({name, cpf, email, address, zipcode, number, city, state});
        await clientRepository.save(client);

        return client;
    }
}
