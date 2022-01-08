import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
// import { hash } from '../../utils/encryption';
import { JwtAuthGuard } from '../auth/jwt.auth.guard';
import { CreateRoleDto } from './dto/role.dto';

import { CreateUpdateUserDto, FindUserWithWhereQueryDto } from './dto/user.dto';
import { UserModel } from '../../models/user.model';
import { UserService } from './user.service';
import { GetUserResponseModel } from '../../response_model/user.response.model';
import { encryptToAES256 } from '../../utils/encryption';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(
    private userService: UserService, // private encryptionService: EncryptionService,
  ) {}

  @Get('dummy')
  @ApiResponse({
    status: 200,
    type: GetUserResponseModel,
  })
  async findAllUser() {
    return {
      message: 'Get User Success',
      result: await this.userService.findAll({}),
    };
  }

  @Get()
  @ApiResponse({
    status: 200,
    type: GetUserResponseModel,
  })
  async findUserWithQuery(@Query() query: FindUserWithWhereQueryDto) {
    const { limit, ...where } = query;
    return {
      message: 'Get Userby',
      result: await this.userService.findAll({ where, limit }),
    };
  }

  @Post('create')
  @UseGuards(JwtAuthGuard)
  @ApiUnauthorizedResponse({
    description: 'Invalid Token',
  })
  @ApiBearerAuth('access-token')
  @ApiOperation({
    description:
      "Create a user with roles.\n\n**Status** field is Optional field, use one of **['ACTIVE', 'INACTIVE', 'BLOCKED']**",
  })
  async createUser(@Body() createUpdateUserDto: CreateUpdateUserDto) {
    // const encryptedPassword = this.encryptionService.encryptToAES256(
    //   CreateUpdateUserDto.password,
    // );
    // const salt = bcrypt.genSaltSync(16);
    // const hash = bcrypt.hashSync(CreateUpdateUserDto.password, salt);
    const encryptedPassword = encryptToAES256(createUpdateUserDto.password);
    try {
      return {
        message: 'User Created Successfully',
        result: await this.userService.createUser({
          ...createUpdateUserDto,
          // password: hash,
          password: encryptedPassword,
        }),
      };
    } catch (error) {
      console.log(error);
      return;
    }
  }

  @Put('/update/:userId')
  @UseGuards(JwtAuthGuard)
  @ApiUnauthorizedResponse({
    description: 'Invalid Token',
  })
  @ApiBearerAuth('access-token')
  @ApiOperation({
    description: 'Update a specified user',
  })
  @ApiParam({
    name: 'userId',
    description:
      'User Id is used for change another user. If User Id is empty, current user will be used',
  })
  async updateUser(
    @Req() request: jwtPayload,
    @Body() createUpdateUserDto: CreateUpdateUserDto,
    @Param('userId') userId: number,
  ) {
    let user: UserModel;
    if (!userId) {
      user = await this.userService.findByUsername(request.user.username);
    } else {
      user = await this.userService.findById(userId);
    }
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
    } else {
      throw new HttpException('User not Found', HttpStatus.BAD_REQUEST);
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
