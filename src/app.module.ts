import { Module, Scope } from '@nestjs/common';
// import db from './app.db_connection';
import { UserModule } from './features/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AuthModule } from './features/auth/auth.module';
import { LoggerModule } from 'nestjs-pino';
import { StoreModule } from './features/store/store.module';
import { TransformResponseInterceptor } from './utils/transform.response.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ProductModule } from './features/products/products.module';
import { DatabaseModule } from './utils/database.module';
import { join } from 'path';

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
    ServeStaticModule.forRoot({
      exclude: ['/docs'],
      rootPath: join(__dirname, '..', 'client/dist'),
    }),
    DatabaseModule,
    StoreModule,
    AuthModule,
    UserModule,
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
