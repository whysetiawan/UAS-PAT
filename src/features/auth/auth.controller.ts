import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { LoginUserDto } from '../user/dto/user.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt.auth.guard';
import AuthLoginModel from '../../models/auth.login.model';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiOkResponse({
    status: 201,
    description: 'Login Success',
    type: AuthLoginModel,
  })
  @ApiUnauthorizedResponse({
    status: 401,
    description: 'Invalid username or password',
  })
  async login(@Body() loginUserDto: LoginUserDto): Promise<any> {
    try {
      console.log('login Dto', loginUserDto);
      const user = await this.authService.validateUser(
        loginUserDto.username,
        loginUserDto.password,
      );
      if (user)
        return {
          message: 'User Logged In Success',
          result: user,
        };
      throw new UnauthorizedException('Invalid username or password');
    } catch (error) {
      return error;
    }
  }

  @Get('logout')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  async logout(@Req() request: jwtPayload) {
    this.authService.destroyAccessToken(request.user);
    return {
      message: 'Logout Success',
      result: null,
    };
  }
}
