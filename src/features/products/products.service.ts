import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProductStoreModel } from '../../models/product_store.model';
import { StoreModel } from '../../models/store.model';
import { ProductModel } from '../../models/product.model';
import { CreateUpdateProductDto } from './dto/create.product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(ProductModel)
    private productModel: typeof ProductModel,

    @InjectModel(ProductStoreModel)
    private productStoreModel: typeof ProductStoreModel,
  ) {
    async function init() {
      await productModel.upsert({
        id: 1,
        name: 'Croffle',
        price: 10000,
      });
      await productModel.upsert({
        id: 2,
        name: 'Salad',
        price: 15000,
      });

      await productStoreModel.upsert({
        productId: 2,
        storeId: 1,
        stocks: 25,
      });
    }
  }

  findAllProduct() {
    return this.productModel.findAll();
  }

  async findProductByStore(storeId: number) {
    let where = {};
    if (typeof storeId === 'number') {
      where = {
        ...where,
        storeId,
      };
    } else {
    }
    const products = await this.productStoreModel.findAll({
      where: where,
      include: [
        {
          model: ProductModel,
        },
        {
          model: StoreModel,
        },
      ],
    });
    return products;
  }

  async createProduct(data: CreateUpdateProductDto) {
    const createdProduct = await this.productModel.create(data);
    this.productStoreModel.create({
      productId: createdProduct.id,
      storeId: data.storeId ?? 1,
      stocks: 0,
    });
    return this.productModel.create(data);
  }

  updateProduct(data: CreateUpdateProductDto, productId: number) {
    const updatedProduct = this.productModel.update(data, {
      where: {
        id: productId,
      },
    });
    return updatedProduct[0] > 0;
  }
}
