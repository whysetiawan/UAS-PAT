import { Module, Scope } from '@nestjs/common';
// import db from './app.db_connection';
import { UserModule } from './features/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './features/auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from './models/user.model';
import { LoggerModule } from 'nestjs-pino';
import { RoleModel } from './models/role.model';
import { StoreModule } from './features/store/store.module';
import { StoreModel } from './models/store.model';
import { TransformResponseInterceptor } from './utils/transform.response.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true,
            levelFirst: true,
            translateTime: 'UTC:dd/mm/yyyy, h:MM:ss TT Z',
          },
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
    //   entities: ['dist/**/*.model{.ts,.js}'],
    //   logging: true,
    //   extra: {
    //     ssl: {
    //       rejectUnauthorized: false,
    //     },
    //   },
    // }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.NODE_ENV == 'dev' ? 'localhost' : process.env.DB_HOST,
      port:
        process.env.NODE_ENV == 'dev' ? 5432 : parseInt(process.env.DB_PORT),
      username: process.env.NODE_ENV == 'dev' ? 'mac' : process.env.DB_USERNAME,
      password: process.env.NODE_ENV == 'dev' ? '' : process.env.DB_PASSWORD,
      database: process.env.NODE_ENV == 'dev' ? 'test_db' : process.env.DB_NAME,
      synchronize: true,
      ssl: process.env.NODE_ENV == 'dev' ? false : true,
      dialectOptions:
        process.env.NODE_ENV == 'dev'
          ? {}
          : {
              ssl: {
                require: true,
                rejectUnauthorized: false,
              },
            },
      sync: {
        // force: true,
        alter: {
          drop: false,
        },
      },
      // logging: true,
      autoLoadModels: true,
      models: [UserModel, RoleModel, StoreModel],
    }),
    AuthModule,
    UserModule,
    StoreModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: TransformResponseInterceptor,
    },
  ],
})
export class AppModule {}
