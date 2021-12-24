import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
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
  id: number;

  @Column
  name: string;

  @Column({
    type: DataType.CHAR(500),
  })
  address: string;

  @Column({
    type: DataType.FLOAT,
  })
  longitude: number;

  @Column({
    type: DataType.FLOAT,
  })
  latitude: number;

  @HasMany(() => UserModel)
  user: UserModel[];
}
