// import { Entity, Column, PrimaryGeneratedColumn, Table } from 'typeorm';
import { ApiResponseProperty } from '@nestjs/swagger';
import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { UserModel } from './user.model';

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
  @ApiResponseProperty()
  id: number;

  @Column
  @ApiResponseProperty()
  name: string;

  @HasMany(() => UserModel)
  user: UserModel[];
}
