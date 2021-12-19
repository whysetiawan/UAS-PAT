import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
// import { hash } from 'src/utils/encryption';
import * as bcrypt from 'bcrypt';
import { encryptToAES256 } from 'src/utils/encryption';
import { JwtAuthGuard } from '../auth/jwt.auth.guard';
import { CreateRoleDto } from './dto/role.dto';

import { CreateUserDto, LoginUserDto } from './dto/user.dto';
import { RoleModel } from './entities/role.entity';
import { UserModel } from './entities/user.entity';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(
    private userService: UserService, // private encryptionService: EncryptionService,
  ) {}

  @Post('/create')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<UserModel> {
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
  @ApiUnauthorizedResponse({
    description: 'Invalid Token',
  })
  @ApiBearerAuth('access-token')
  findUserByUsername(@Req() request: jwtPayload): Promise<UserModel> {
    // console.log('got a request from /me ', request);
    return this.userService.findByUsername(request.user.username);
  }

  @Get()
  findAllUser() {
    return this.userService.findAll();
  }

  @Post('role')
  createRole(@Body() createRoleDto: CreateRoleDto): Promise<RoleModel> {
    return this.userService.createRole(createRoleDto);
  }

  @Get('role')
  @ApiOperation({
    description: 'Get All Available Roles',
  })
  findAllRole(): Promise<RoleModel[]> {
    return this.userService.findAllRole();
  }
}
