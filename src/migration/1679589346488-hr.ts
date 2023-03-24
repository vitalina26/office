import { MigrationInterface, QueryRunner } from "typeorm"

export class hr1679589346488 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "employee" RENAME COLUMN "id" TO "emp_id"`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "employee" RENAME COLUMN "emp_id" TO "id"`,
        )
    }

}
