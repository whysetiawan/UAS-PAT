import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  findByUsername(username: string): Promise<UserEntity> {
    return this.userRepository.findOne({
      where: {
        username,
      },
    });
  }

  async createUser(data: CreateUserDto): Promise<UserEntity> {
    this.userRepository.create(data);
    return await this.userRepository.save(data);
  }
}
