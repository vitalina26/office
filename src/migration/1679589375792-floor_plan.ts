import { MigrationInterface, QueryRunner } from "typeorm"

export class floorPlan1679589375792 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "table" RENAME COLUMN "table_id" TO "id"`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "table" RENAME COLUMN "id" TO "table_id"`,
        )
    }
}
