import { Module } from '@nestjs/common';
import { ProductService } from './products.service';
import { ProductController } from './products.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { StoreModel } from '../../models/store.model';
import { ProductModel } from '../../models/product.model';
import { ProductStoreModel } from '../../models/product_store.model';

@Module({
  providers: [ProductService],
  controllers: [ProductController],
  imports: [
    SequelizeModule.forFeature([ProductModel, StoreModel, ProductStoreModel]),
  ],
})
export class ProductModule {}
