import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1704334175197 implements MigrationInterface {
  name = 'Init1704334175197';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`t_accounts\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`created_by\` int NULL, \`updated_by\` int NULL, \`deleted_by\` int NULL, \`code\` varchar(36) NOT NULL, \`email\` varchar(255) NULL, \`password\` varchar(255) NULL, \`user_name\` varchar(255) NOT NULL, \`social_id\` varchar(255) NULL, \`social_type\` varchar(255) NULL, \`email_verified\` tinyint NOT NULL DEFAULT 0, UNIQUE INDEX \`IDX_987f75bef9be0560e9725e2c40\` (\`user_name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX \`IDX_987f75bef9be0560e9725e2c40\` ON \`t_accounts\``);
    await queryRunner.query(`DROP TABLE \`t_accounts\``);
  }
}
