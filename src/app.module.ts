import { Module, Scope } from '@nestjs/common';
// import db from './app.db_connection';
import { UserModule } from './features/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './features/auth/auth.module';
import { LoggerModule } from 'nestjs-pino';
import { StoreModule } from './features/store/store.module';
import { TransformResponseInterceptor } from './utils/transform.response.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ProductModule } from './features/products/products.module';
import { DatabaseModule } from './utils/database.module';

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
    DatabaseModule,
    AuthModule,
    UserModule,
    StoreModule,
    ProductModule,
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
