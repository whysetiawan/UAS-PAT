import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { decryptFromAES256 } from 'src/utils/encryption';
import { UserModel } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findByUsername(username);
    const decryptedPassword = decryptFromAES256(user.password);

    if (user && decryptedPassword === password) {
      const { password, ...result } = user;
      // return result;
      return this.generateAccessToken(user);
    }
    return null;
  }

  generateAccessToken(user: UserModel) {
    const payload = {
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
    };
    return {
      message: 'Login Success',
      access_token: this.jwtService.sign(payload),
      data: user,
    };
  }

  destroyAccessToken(user: any) {
    const payload = {
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
    };
    this.jwtService.sign(payload, {
      expiresIn: '30s',
    });
  }
}
