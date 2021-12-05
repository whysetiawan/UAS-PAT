import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
// import { hash } from 'src/utils/encryption';
import * as bcrypt from 'bcrypt';
import { encryptToAES256 } from 'src/utils/encryption';
import { JwtAuthGuard } from '../auth/jwt.auth.guard';

import { CreateUserDto, LoginUserDto } from './dto/user.dto';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(
    private userService: UserService, // private encryptionService: EncryptionService,
  ) {}

  @Post()
  async addUser(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    // const encryptedPassword = this.encryptionService.encryptToAES256(
    //   createUserDto.password,
    // );
    // const salt = bcrypt.genSaltSync(16);
    // const hash = bcrypt.hashSync(createUserDto.password, salt);
    const encryptedPassword = encryptToAES256(createUserDto.password);
    // return createUserDto;
    return await this.userService.createUser({
      ...createUserDto,
      // password: hash,
      password: encryptedPassword,
    });
  }

  @Get('/me')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  login(@Req() request: jwtPayload): Promise<UserEntity> {
    // console.log('got a request from /me ', request);
    return this.userService.findByUsername(request.user.username);
  }
}
