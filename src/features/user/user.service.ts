import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user.dto';
import { UserModel } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel)
    private userRepository: typeof UserModel,
  ) {}

  findByUsername(username: string): Promise<UserModel> {
    return this.userRepository.findOne({
      where: {
        username,
      },
    });
  }

  findAll(): Promise<UserModel[]> {
    return this.userRepository.findAll();
  }

  async createUser(data: CreateUserDto): Promise<UserModel> {
    return this.userRepository.create(data);
    // return await this.userRepository.save(data);
  }
}
