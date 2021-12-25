import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import Sequelize from 'sequelize';
import { encryptToAES256 } from '../../utils/encryption';
import { StoreModel } from '../../models/store.model';
import { CreateRoleDto } from './dto/role.dto';
import { CreateUpdateUserDto, FindUserWithWhereQueryDto } from './dto/user.dto';
import { RoleModel } from '../../models/role.model';
import { UserModel } from '../../models/user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel)
    private userModel: typeof UserModel,
    @InjectModel(RoleModel)
    private roleModel: typeof RoleModel,
  ) {
    userModel.addHook('beforeCreate', (user: UserModel) => {
      user.password = encryptToAES256(user.password);
    });
    userModel.addHook('beforeUpdate', 'password', (user: UserModel) => {
      user.password = encryptToAES256(user.password);
    });
    roleModel.upsert({
      id: 1,
      name: 'admin',
    });
    roleModel.upsert({
      id: 2,
      name: 'manager',
    });
    userModel.upsert({
      id: 1,
      firstName: 'user',
      lastName: 'admin',
      fullName: 'user manager',
      status: 'ACTIVE',
      username: 'admin',
      password: encryptToAES256('admin'),
      roleId: 1,
      storeId: 1,
    });
    userModel.upsert({
      id: 2,
      firstName: 'user',
      lastName: 'manager',
      status: 'ACTIVE',
      fullName: 'user manager',
      username: 'manager',
      password: encryptToAES256('manager'),
      roleId: 2,
      storeId: 1,
    });
  }

  findAll({
    limit = 3,
    where,
  }: {
    limit?: number;
    where?: FindUserWithWhereQueryDto;
  }): Promise<UserModel[]> {
    const Op = Sequelize.Op;
    const { firstName, lastName, ...rest } = where ?? {};
    return this.userModel.findAll({
      limit,
      where: where
        ? {
            ...rest,
            [Op.or]: {
              firstName: {
                [Op.or]: [
                  { [Op.like]: `%${firstName ?? ''}%` },
                  { [Op.like]: `%${lastName ?? ''}%` },
                ],
              },
              lastName: {
                [Op.or]: [
                  { [Op.like]: `%${firstName ?? ''}%` },
                  { [Op.like]: `%${lastName ?? ''}%` },
                ],
              },
            },
          }
        : {},
      attributes: { exclude: ['password'] },
    });
  }

  findByUsername(username: string, exclude = ['password']): Promise<UserModel> {
    return this.userModel.findOne({
      where: {
        username,
      },
      attributes: { exclude: exclude },
      include: [
        {
          model: RoleModel,
        },
        {
          model: StoreModel,
        },
      ],
    });
  }

  findById(userId: number): Promise<UserModel> {
    return this.userModel.findOne({
      where: {
        id: userId,
      },
      include: [
        {
          model: RoleModel,
        },
        {
          model: StoreModel,
        },
      ],
    });
  }

  async updateUser(data: CreateUpdateUserDto): Promise<boolean> {
    const updatedUser = this.userModel.update(data, {
      where: {
        username: data.username,
      },
    });
    if (updatedUser[0] > 0) {
      return true;
    }
    return false;
  }

  createUser(data: CreateUpdateUserDto): Promise<UserModel> {
    return this.userModel.create({
      ...data,
      fullName: `${data.firstName} ${data.lastName}`,
    });
    // return await this.userModel.save(data);
  }

  createRole(data: CreateRoleDto): Promise<RoleModel> {
    return this.roleModel.create(data);
  }

  findAllRole(): Promise<RoleModel[]> {
    return this.roleModel.findAll();
  }
}
