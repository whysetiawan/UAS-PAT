import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
// import db from './app.db_connection';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { UserModule } from './features/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './features/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      // host: process.env.DB_HOST,
      // username: process.env.DB_USER,
      // password: process.env.DB_PASSWORD,
      // database: process.env.DB_NAME,
      // url: 'postgres://naqwqtwgvnnuls:1ec62bb5b201fa930ef3c1e1b8736c2740a70595a142c56038bfefeb040480db@ec2-3-89-214-80.compute-1.amazonaws.com:5432/d41r5lf1ndm0jm',
      url: process.env.DB_URL,
      ssl: true,
      synchronize: true,
      entities: ['dist/**/*.entity{.ts,.js}'],
      logging: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
