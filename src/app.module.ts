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
      url: 'mongodb+srv://db-admin:OgMtn5XoDc4fg4Sa@cayn.yusnl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      authSource: 'admin',
      // useNewUrlParser: true,
      synchronize: true,
      logging: true,
      useUnifiedTopology: true,
      replicaSet: 'cayn-shard-0',
      // entities: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
