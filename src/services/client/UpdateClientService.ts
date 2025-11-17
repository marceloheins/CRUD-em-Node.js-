import { IClientRequest } from "../../interfaces/IClientRequest";
import { getCustomRepository } from "typeorm";
import { ClientsRepostories } from "../../repositories/ClientRepository";

class UpdateClientService {
    async execute(
        id: string,
        { name, cpf, email, address, zipcode, number, city, state }: IClientRequest
    ) {
        if (!name) {
            throw new Error("Nome está vazio");
        }

        const clientRepository = getCustomRepository(ClientsRepostories);

        // Busca o cliente pelo id
        const client = await clientRepository.findOne({ where: { id } });
        if (!client) {
            throw new Error("Cliente não encontrado");
        }

        // Verifica se já existe outro cliente com o mesmo CPF
        const clientWithSameCpf = await clientRepository.findOne({ where: { cpf } });
        if (clientWithSameCpf && clientWithSameCpf.id !== id) {
            throw new Error("Já existe outro cliente com esse CPF");
        }

        // Atualiza os campos
        client.name = name;
        client.cpf = cpf;
        client.email = email;
        client.address = address;
        client.zipcode = zipcode;
        client.number = number;
        client.city = city;
        client.state = state;

        await clientRepository.save(client);

        return client;
    }
}

export { UpdateClientService };