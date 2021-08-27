import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1629998504337 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('CREATE SCHEMA IF NOT EXISTS demo;');
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('DROP SCHEMA IF EXISTS demo CASCADE;');
  }
}
