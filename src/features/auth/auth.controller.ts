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
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import {
  AuthLoginResponseModel,
  AuthLogoutResponseModel,
} from '../../response_model/auth.response.model';
import { LoginUserDto } from '../user/dto/user.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt.auth.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiResponse({
    status: 201,
    type: AuthLoginResponseModel,
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
          data: user,
        };
      throw new UnauthorizedException('Invalid username or password');
    } catch (error) {
      return error;
    }
  }

  @Get('logout')
  @ApiBearerAuth('access-token')
  @ApiResponse({
    status: 200,
    type: AuthLogoutResponseModel,
  })
  @UseGuards(JwtAuthGuard)
  async logout(@Req() request: jwtPayload) {
    this.authService.destroyAccessToken(request.user);
    return {
      message: 'Logout Success',
      data: null,
    };
  }
}
