import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RoleModel } from '../models/role.model';
import { StoreModel } from '../models/store.model';
import { UserModel } from '../models/user.model';

@Module({
  imports: [
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
      validateOnly: true,
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
  ],
})
export class DatabaseModuleTest {}
