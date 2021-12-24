// import { Entity, Column, PrimaryGeneratedColumn, Table } from 'typeorm';
import { Table, Column, Model, BelongsToMany } from 'sequelize-typescript';
import { ProductStoreModel } from './product_store.model';
import { StoreModel } from './store.model';

@Table({
  modelName: 'product',
  freezeTableName: true,
  tableName: 'product',
  underscored: true,
})
export class ProductModel extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column
  name: string;

  @Column
  price: string;

  @BelongsToMany(() => StoreModel, {
    through: () => ProductStoreModel,
    as: 'Store',
  })
  store: StoreModel[];
}
