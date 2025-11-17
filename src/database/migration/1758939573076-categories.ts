import {MigrationInterface, QueryRunner} from "typeorm";

export class categories1758939573076 implements MigrationInterface {
    name = 'categories1758939573076'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categories" (
            "id" character varying NOT NULL, 
            "name" character varying NOT NULL, 
            "descrition" character varying NOT NULL, 
            CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"),
            CONSTRAINT "UQ_categories_name" UNIQUE ("name" ));`); //garante que o nome da categoria seja unico
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "categories"`);
    }

}
