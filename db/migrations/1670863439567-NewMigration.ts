import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1670863439567 implements MigrationInterface {
    name = 'NewMigration1670863439567'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "invoice" ("id" SERIAL NOT NULL, "total" numeric NOT NULL, "is_paid" boolean NOT NULL DEFAULT false, "user_id" integer NOT NULL, CONSTRAINT "PK_15d25c200d9bcd8a33f698daf18" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "stocks" ("id" SERIAL NOT NULL, "quantity" double precision NOT NULL, "type" character varying NOT NULL, "product_id" integer NOT NULL, CONSTRAINT "PK_b5b1ee4ac914767229337974575" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_catagories" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_12a484f4758c7b30428fdfcb662" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_invoice" ("id" SERIAL NOT NULL, "quantity" integer NOT NULL, "price" double precision NOT NULL, "total" double precision NOT NULL, "product_id" integer NOT NULL, "invoice_id" integer NOT NULL, CONSTRAINT "PK_9d74cad81354fcc4df6de11adec" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "supplies" ("id" SERIAL NOT NULL, "before_supply" double precision NOT NULL, "after_supply" double precision NOT NULL, "product_id" integer NOT NULL, "stock_id" integer NOT NULL, "catagory_id" integer NOT NULL, CONSTRAINT "PK_49c0dc272c9fcf2723bdfd48be1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "price" integer NOT NULL, "min_stock" integer NOT NULL, "max_stock" integer NOT NULL, "barcode" character varying NOT NULL, "category_id" integer NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "supplies"`);
        await queryRunner.query(`DROP TABLE "product_invoice"`);
        await queryRunner.query(`DROP TABLE "product_catagories"`);
        await queryRunner.query(`DROP TABLE "stocks"`);
        await queryRunner.query(`DROP TABLE "invoice"`);
    }

}
