// import { Entity, Column, PrimaryGeneratedColumn, Table } from 'typeorm';
import { ApiResponseProperty } from '@nestjs/swagger';
import {
  Table,
  Column,
  Model,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { RoleModel } from './role.entity';

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
  @ApiResponseProperty()
  id: number;

  @Column
  @ApiResponseProperty()
  firstName: string;

  @Column
  @ApiResponseProperty()
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
  @ApiResponseProperty()
  username: string;

  @Column({
    allowNull: false,
  })
  @ApiResponseProperty()
  password: string;

  @ForeignKey(() => RoleModel)
  @Column
  @ApiResponseProperty()
  roleId: number;

  @BelongsTo(() => RoleModel)
  role: RoleModel;
}
