import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Put,
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

import { CreateUpdateUserDto, LoginUserDto } from './dto/user.dto';
import { RoleModel } from './models/role.model';
import { UserModel } from './models/user.model';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(
    private userService: UserService, // private encryptionService: EncryptionService,
  ) {}

  @Get()
  async findAllUser() {
    return {
      message: 'Get User Success',
      result: await this.userService.findAll(),
    };
  }

  @Post('/create')
  async createUser(@Body() CreateUpdateUserDto: CreateUpdateUserDto) {
    // const encryptedPassword = this.encryptionService.encryptToAES256(
    //   CreateUpdateUserDto.password,
    // );
    // const salt = bcrypt.genSaltSync(16);
    // const hash = bcrypt.hashSync(CreateUpdateUserDto.password, salt);
    // const encryptedPassword = encryptToAES256(CreateUpdateUserDto.password);
    return {
      message: 'User Created Successfully',
      result: await this.userService.createUser({
        ...CreateUpdateUserDto,
        // password: hash,
        // password: encryptedPassword,
      }),
    };
  }

  @Put('/update')
  @UseGuards(JwtAuthGuard)
  @ApiUnauthorizedResponse({
    description: 'Invalid Token',
  })
  @ApiBearerAuth('access-token')
  async updateUser(
    @Req() request: jwtPayload,
    @Body() createUpdateUserDto: CreateUpdateUserDto,
  ) {
    const user = await this.userService.findByUsername(request.user.username);
    if (user) {
      const isUpdated = this.userService.updateUser(createUpdateUserDto);
      if (isUpdated) {
        return {
          message: 'User Updated Successfully',
          result: {
            ...user.toJSON(),
            ...createUpdateUserDto,
          } as UserModel,
        };
      }
    }
  }

  @Get('/me')
  @UseGuards(JwtAuthGuard)
  @ApiUnauthorizedResponse({
    description: 'Invalid Token',
  })
  @ApiBearerAuth('access-token')
  async findUserByUsername(@Req() request: jwtPayload) {
    try {
      const user = await this.userService.findByUsername(request.user.username);
      if (user) {
        return {
          message: 'Get User Me Success',
          result: user,
        };
      }
      throw new HttpException(
        {
          message: 'User may be deleted',
        },
        HttpStatus.UNAUTHORIZED,
      );
    } catch (error) {
      return error;
    }
  }

  @Post('role')
  @ApiOperation({
    description: 'Create Role by entering name of role ex: Admin',
  })
  async createRole(@Body() createRoleDto: CreateRoleDto) {
    return {
      message: 'Role Created Successfully',
      result: await this.userService.createRole(createRoleDto),
    };
  }

  @Get('role')
  @ApiOperation({
    description: 'Get All Available Roles',
  })
  async findAllRole() {
    return {
      message: 'Success Getting Role',
      result: await this.userService.findAllRole(),
    };
  }
}
