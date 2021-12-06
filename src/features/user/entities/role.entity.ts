// import { Entity, Column, PrimaryGeneratedColumn, Table } from 'typeorm';
import { Table, Column, Model, HasOne } from 'sequelize-typescript';
import { UserModel } from './user.entity';

@Table({
  modelName: 'role',
  freezeTableName: true,
  tableName: 'role',
  underscored: true,
})
export class RoleModel extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column
  name: string;

  @HasOne(() => UserModel)
  user: UserModel;
}
