// import { Entity, Column, PrimaryGeneratedColumn, Table } from 'typeorm';
import { ApiResponseProperty } from '@nestjs/swagger';
import {
  Table,
  Column,
  Model,
  BelongsTo,
  ForeignKey,
  BeforeCreate,
  BeforeUpdate,
  BeforeBulkUpdate,
} from 'sequelize-typescript';
import { fn, col, DataTypes } from 'sequelize';
import { RoleModel } from './role.model';
import { encryptToAES256 } from '../utils/encryption';
import { StoreModel } from './store.model';

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

  @Column({
    defaultValue: 'INACTIVE',
    type: DataTypes.ENUM('ACTIVE', 'INACTIVE', 'BLOCKED'),
  })
  status: string;
  // @ApiResponseProperty()
  // fullName: string;

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
  password: string;

  @BeforeCreate
  @BeforeBulkUpdate
  @BeforeUpdate
  static encryptValue(instance: UserModel) {
    const encrypted = encryptToAES256(instance.password);
    instance.password = encrypted;
  }

  @ForeignKey(() => RoleModel)
  @Column
  @ApiResponseProperty()
  roleId: number;

  @BelongsTo(() => RoleModel)
  @ApiResponseProperty({ type: () => RoleModel })
  role: RoleModel;

  @ForeignKey(() => StoreModel)
  @Column
  @ApiResponseProperty()
  storeId: number;

  @ApiResponseProperty({ type: () => StoreModel })
  @BelongsTo(() => StoreModel)
  store: StoreModel;
}
