import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
// import db from './app.db_connection';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://db-admin:x9NV7rLzF1z5Pvp7@cayn.yusnl.mongodb.net/cayndb?retryWrites=true&w=majority',
      // entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      logging: true,
      useNewUrlParser: true,
      synchronize: true,
      ssl: true,
      authSource: 'db-admin',
      // database: 'myFirstDatabase',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
