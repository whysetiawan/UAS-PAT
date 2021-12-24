import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProductStoreModel } from '../../models/product_store.model';
import { StoreModel } from '../../models/store.model';
import { ProductModel } from '../../models/product.model';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(ProductModel)
    private productModel: typeof ProductModel,

    @InjectModel(ProductStoreModel)
    private productStoreModel: typeof ProductStoreModel,
  ) {
    productModel.upsert({
      id: 1,
      name: 'Croffle',
      price: 10000,
    });
    productModel.upsert({
      id: 2,
      name: 'Salad',
      price: 15000,
    });

    productStoreModel.upsert({
      productId: 2,
      storeId: 1,
      stocks: 25,
    });
  }

  async findProductByStore() {
    const products = await this.productStoreModel.findAll({
      where: {
        storeId: 1,
      },
      include: [
        {
          model: ProductModel,
        },
        {
          model: StoreModel,
        },
      ],
    });
    console.log(products);
    return products;
  }
}
