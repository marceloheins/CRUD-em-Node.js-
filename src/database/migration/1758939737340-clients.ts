import {MigrationInterface, QueryRunner} from "typeorm";

export class clients1758939737340 implements MigrationInterface {
    name = 'clients1758939737340'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "clients" (
            "id" character varying NOT NULL, 
            "name" character varying NOT NULL, 
            "cpf" character varying NOT NULL, 
            "email" character varying NOT NULL, 
            "address" character varying NOT NULL, 
            "zipcode" integer NOT NULL, 
            "number" integer NOT NULL, 
            "city" character varying NOT NULL, 
            "state" character varying NOT NULL, 
            CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"),
            CONSTRAINT "UQ_clients_cpf" UNIQUE ("cpf") );`);//garante que o cpf seja unico
     }

    public async down(queryRunner: QueryRunner): Promise<void> {
       
        await queryRunner.query(`DROP TABLE "clients"`);
       
    }

}
