import {MigrationInterface, QueryRunner} from "typeorm";

export class products1758939607121 implements MigrationInterface {
    name = 'products1758939607121'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" (
            "id" character varying NOT NULL, 
            "name" character varying NOT NULL, 
            "EAN" character varying NOT NULL, 
            "price" integer NOT NULL, 
            "description" character varying NOT NULL, 
            "categoryId" character varying NOT NULL,
            CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"),
            CONSTRAINT "UQ_products_name" UNIQUE ("name"));`);//garante que o nome do produto seja unico
          }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
