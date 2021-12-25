import { ApiResponseProperty } from '@nestjs/swagger';
import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  BelongsToMany,
} from 'sequelize-typescript';
import { ProductModel } from './product.model';
import { ProductStoreModel } from './product_store.model';
import { UserModel } from './user.model';

@Table({
  modelName: 'store',
  freezeTableName: true,
  tableName: 'store',
  underscored: true,
})
export class StoreModel extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  @ApiResponseProperty()
  id: number;

  @Column
  @ApiResponseProperty()
  name: string;

  @Column({
    type: DataType.STRING(500),
  })
  @ApiResponseProperty()
  address: string;

  @Column({
    type: DataType.FLOAT,
  })
  @ApiResponseProperty()
  longitude: number;

  @Column({
    type: DataType.FLOAT,
  })
  @ApiResponseProperty()
  latitude: number;

  @HasMany(() => UserModel)
  user: UserModel[];

  @BelongsToMany(() => ProductModel, {
    through: () => ProductStoreModel,
    as: 'Product',
  })
  store: ProductModel[];
}
