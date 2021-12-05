// import { Entity, Column, PrimaryGeneratedColumn, Table } from 'typeorm';
import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({
  modelName: 'user',
  freezeTableName: true,
  tableName: 'user',
  underscored: true,
})
export class UserModel extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column
  firstName: string;

  @Column
  lastName: string;

  // @Column({
  //   nullable: false,
  //   unique: true,
  // })
  // email: string;

  @Column({
    allowNull: false,
    unique: true,
  })
  username: string;

  @Column({
    allowNull: false,
  })
  password: string;
}
