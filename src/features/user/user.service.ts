import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/role.dto';
import { CreateUserDto } from './dto/user.dto';
import { RoleModel } from './entities/role.entity';
import { UserModel } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel)
    private userRepository: typeof UserModel,
    @InjectModel(RoleModel)
    private roleRepository: typeof RoleModel,
  ) {}

  findByUsername(username: string): Promise<UserModel> {
    return this.userRepository.findOne({
      where: {
        username,
      },
      include: [
        {
          model: RoleModel,
          attributes: ['name'],
        },
      ],
    });
  }

  findAll(): Promise<UserModel[]> {
    return this.userRepository.findAll();
  }

  createUser(data: CreateUserDto): Promise<UserModel> {
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
