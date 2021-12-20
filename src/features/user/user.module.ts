import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RoleModel } from './models/role.model';
// import { EncryptionModule } from 'src/utils/encryption/encryption.module';
import { UserModel } from './models/user.model';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [SequelizeModule.forFeature([UserModel, RoleModel])],
  exports: [UserService],
})
export class UserModule {}
