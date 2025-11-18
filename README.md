**#API de Gestão de Vendas (Projeto Acadêmico)**

**###Sobre o Projeto**

Este é o projeto de backend para um sistema de gestão de vendas, desenvolvido como parte de uma atividade acadêmica. 
A aplicação consiste em uma API RESTful completa, construída com as tecnologias mais modernas do ecossistema Node.js.
O objetivo principal é fornecer um backend robusto e escalável que servirá como a "espinha dorsal" para uma futura aplicação mobile em React Native.

**###Tecnologias Utilizadas**

-**Node.js:** Ambiente de execução do backend.

-**Express.js:** Framework para gerenciamento de rotas e middlewares.

-**TypeScript:** Superset do JavaScript que adiciona tipagem estática.

-**TypeORM:** ORM (Object-Relational Mapper) para interação com o banco de dados.

-**PostgreSQL:** Banco de dados relacional (SQL).

-**jsonwebtoken:** Para geração e validação de tokens de autenticação.

-**bcryptjs:** Para hashing de senhas.uuid: Para geração de IDs únicos. 

-Middleware para tratamento de erros em rotas assíncronas.

**###Como Executar o Projeto:**

-Instale as dependências: **#Bash npm install#**

-Configure o Banco de Dados:Crie um banco de dados PostgreSQL (ex: api).Renomeie o arquivo ormconfig.json.example (ou similar) para ormconfig.json (ou configure as variáveis de ambiente).

-Ajuste as credenciais de acesso ao seu banco PostgreSQL (host, porta, usuário, senha, nome do banco).

-Execute as Migrations: Bash npm run migration:run 

-(Você pode precisar criar um script "migration:run": "ts-node-dev ./node_modules/typeorm/cli.js migration:run" no seu package.json)

-Inicie o servidor de desenvolvimento:Bash npm run dev

-Também pode usar os comandos "yarn" para rodar a aplicação.

-O servidor estará rodando na porta 3000.
