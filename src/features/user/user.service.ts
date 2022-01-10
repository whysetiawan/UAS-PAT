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
  private included = [
    {
      model: RoleModel,
    },
    {
      model: StoreModel,
    },
  ];

  constructor(
    @InjectModel(UserModel)
    private userModel: typeof UserModel,
    @InjectModel(RoleModel)
    private roleModel: typeof RoleModel,
  ) {
    async function initializeDummyUser() {
      await userModel.addHook('beforeCreate', (user: UserModel) => {
        user.password = encryptToAES256(user.password);
      });
      await userModel.addHook('beforeUpdate', 'password', (user: UserModel) => {
        user.password = encryptToAES256(user.password);
      });
      await roleModel.upsert({
        id: 1,
        name: 'admin',
      });
      await roleModel.upsert({
        id: 2,
        name: 'manager',
      });
      await userModel.upsert({
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
      await userModel.upsert({
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
    initializeDummyUser();
  }

  async findAll({ where }: { where?: FindUserWithWhereQueryDto }): Promise<{
    rows: UserModel[];
    total: number;
    page: number;
    limitPerPage: number;
  }> {
    const Op = Sequelize.Op;
    const { firstName, lastName, page, limitPerPage, ...rest } = where ?? {
      page: 1,
      limitPerPage: 3,
    };
    const offset = (page - 1) * limitPerPage;
    console.log('offset bro ', offset, page, limitPerPage);
    const result = await this.userModel.findAndCountAll({
      limit: limitPerPage,
      offset,
      order: [['id', 'ASC']],
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
      include: this.included,
    });
    return {
      rows: result.rows,
      total: result.count,
      page: where.page,
      limitPerPage: where.limitPerPage,
    };
  }

  findByUsername(username: string, exclude = ['password']): Promise<UserModel> {
    return this.userModel.findOne({
      where: {
        username,
      },
      attributes: { exclude: exclude },
      include: this.included,
    });
  }

  findById(userId: number): Promise<UserModel> {
    return this.userModel.findOne({
      where: {
        id: userId,
      },
      include: this.included,
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
