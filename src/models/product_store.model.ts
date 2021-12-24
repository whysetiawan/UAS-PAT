import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { ProductModel } from './product.model';
import { StoreModel } from './store.model';

@Table({
  modelName: 'product-store',
  freezeTableName: true,
  tableName: 'product_store',
  underscored: true,
})
export class ProductStoreModel extends Model {
  @ForeignKey(() => ProductModel)
  @Column
  productId: number;

  @ForeignKey(() => StoreModel)
  @Column({
    unique: true,
  })
  storeId: number;

  @Column
  stocks: number;

  @BelongsTo(() => ProductModel)
  product: ProductModel;

  @BelongsTo(() => StoreModel)
  store: StoreModel;
}
