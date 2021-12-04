import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

const db = TypeOrmModule.forRoot({
  type: 'mongodb',
  url: 'mongodb+srv://db-admin:x9NV7rLzF1z5Pvp7@cluster0.yusnl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  entities: [join(__dirname, '**/**.entity{.ts,.js}')],
  logging: true,
});

export default db;
