import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { StoreModel } from '../../models/store.model';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';

@Module({
  providers: [StoreService],
  imports: [SequelizeModule.forFeature([StoreModel])],
  controllers: [StoreController],
})
export class StoreModule {}
