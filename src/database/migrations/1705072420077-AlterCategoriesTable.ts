import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class AlterCategoriesTable1705072420077 implements MigrationInterface {

public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns('Categories', [
            new TableColumn({
                name: 'left_value',
                type: 'int',
                isNullable: false,
            }),
            new TableColumn({
                name: 'right_value',
                type: 'int',
                isNullable: false,
            }),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('Categories', 'left_value');
        await queryRunner.dropColumn('Categories', 'right_value');
    }
}
