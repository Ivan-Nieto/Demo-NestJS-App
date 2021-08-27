import { ConnectionOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'usr',
  password: 'password',
  database: 'demo',
  entities: [__dirname + '/../../**/*.entity.{ts,js}'],
  subscribers: [__dirname + '/../**/*.subscriber.{ts,js}'],
  migrations: [__dirname + '/../migrations/*.{ts,js}'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
  namingStrategy: new SnakeNamingStrategy(),
  synchronize: false,
  dropSchema: false,
};

export default config;
