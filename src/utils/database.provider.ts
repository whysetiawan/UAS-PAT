import { Sequelize } from 'sequelize-typescript';
import { UserModel } from 'src/features/user/entities/user.entity';

export const databaseProviders = [
  {
    provider: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'password',
        database: 'nest',
      });
      sequelize.addModels([UserModel]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
