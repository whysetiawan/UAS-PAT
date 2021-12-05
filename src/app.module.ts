import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
// import db from './app.db_connection';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { UserModule } from './features/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './features/auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from './features/user/entities/user.entity';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        prettyPrint: {
          colorize: true,
          levelFirst: true,
          translateTime: 'UTC:dd/mm/yyyy, h:MM:ss TT Z',
        },
      },
    }),
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   // host: process.env.DB_HOST,
    //   // username: process.env.DB_USER,
    //   // password: process.env.DB_PASSWORD,
    //   // database: process.env.DB_NAME,
    //   url: process.env.DB_URL,
    //   ssl: true,
    //   synchronize: true,
    //   entities: ['dist/**/*.entity{.ts,.js}'],
    //   logging: true,
    //   extra: {
    //     ssl: {
    //       rejectUnauthorized: false,
    //     },
    //   },
    // }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST ?? 'localhost',
      port: parseInt(process.env.DB_PORT) ?? 5432,
      username: process.env.DB_USERNAME ?? 'root',
      password: process.env.DB_PASSWORD ?? '',
      database: process.env.DB_NAME ?? 'test_db',
      synchronize: true,
      ssl: true,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
      sync: {
        force: true,
        alter: {
          drop: true,
        },
      },
      // logging: true,
      autoLoadModels: true,
      models: [UserModel],
    }),
    AuthModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
