import {MigrationInterface, QueryRunner} from "typeorm";

export class sale1759183871170 implements MigrationInterface {
    name = 'sale1759183871170'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sales" (
            "id" character varying NOT NULL, 
            "value" integer NOT NULL, 
            "discount" integer NOT NULL, 
            "productId" character varying NOT NULL, 
            "clientId" character varying NOT NULL, 
            CONSTRAINT "PK_4f0bc990ae81dba46da680895ea" PRIMARY KEY ("id"));`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "sales"`);
    }

}
