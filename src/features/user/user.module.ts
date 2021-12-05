import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
// import { EncryptionModule } from 'src/utils/encryption/encryption.module';
import { UserModel } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [SequelizeModule.forFeature([UserModel])],
  exports: [UserService],
})
export class UserModule {}
