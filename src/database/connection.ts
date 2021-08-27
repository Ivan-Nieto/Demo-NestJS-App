import { createConnection } from 'typeorm';

createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 3303,
  username: 'user',
  password: 'password',
  database: 'demo',
  entities: [__dirname + '/entity/*.js'],
  synchronize: true,
})
  .then((connection) => {
    // here you can start to work with your entities
  })
  .catch((error) => console.log(error));
