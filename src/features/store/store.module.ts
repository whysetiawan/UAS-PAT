import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { StoreModel } from '../../models/store.model';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';
import { ProductModel } from 'src/models/product.model';
import { ProductStoreModel } from 'src/models/product_store.model';

@Module({
  providers: [StoreService],
  imports: [
    SequelizeModule.forFeature([StoreModel, ProductModel, ProductStoreModel]),
  ],
  controllers: [StoreController],
})
export class StoreModule {}
