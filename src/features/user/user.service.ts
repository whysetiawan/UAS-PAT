import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { encryptToAES256 } from 'src/utils/encryption';
import { StoreModel } from '../store/models/store.model';
import { CreateRoleDto } from './dto/role.dto';
import { CreateUpdateUserDto } from './dto/user.dto';
import { RoleModel } from './models/role.model';
import { UserModel } from './models/user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel)
    private userRepository: typeof UserModel,
    @InjectModel(RoleModel)
    private roleRepository: typeof RoleModel,
  ) {
    userRepository.addHook('beforeCreate', (user: UserModel) => {
      user.password = encryptToAES256(user.password);
    });
    userRepository.addHook('beforeUpdate', 'password', (user: UserModel) => {
      user.password = encryptToAES256(user.password);
    });
    roleRepository.upsert({
      id: 1,
      name: 'admin',
    });
    roleRepository.upsert({
      id: 2,
      name: 'manager',
    });
    userRepository.upsert({
      id: 1,
      firstName: 'test',
      lastName: 'user',
      username: 'admin',
      password: encryptToAES256('admin'),
      roleId: 1,
    });
    userRepository.upsert({
      id: 2,
      firstName: 'test',
      lastName: 'user',
      username: 'manager',
      password: encryptToAES256('manager'),
      roleId: 2,
    });
  }

  findAll(): Promise<UserModel[]> {
    return this.userRepository.findAll({
      attributes: { exclude: ['password'] },
    });
  }

  findByUsername(username: string): Promise<UserModel> {
    return this.userRepository.findOne({
      where: {
        username,
      },
      attributes: { exclude: ['password'] },
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
    const updatedUser = this.userRepository.update(data, {
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
    return this.userRepository.create(data);
    // return await this.userRepository.save(data);
  }

  createRole(data: CreateRoleDto): Promise<RoleModel> {
    return this.roleRepository.create(data);
  }

  findAllRole(): Promise<RoleModel[]> {
    return this.roleRepository.findAll();
  }
}
