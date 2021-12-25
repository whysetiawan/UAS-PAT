import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { decryptFromAES256 } from '../../utils/encryption';
import { UserModel } from '../../models/user.model';
import { UserService } from '../user/user.service';
import AuthLoginModel from '../../models/auth.login.model';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async validateUser(
    username: string,
    password: string,
  ): Promise<AuthLoginModel> {
    const user = await this.userService.findByUsername(username, []);
    if (user) {
      const decryptedPassword = decryptFromAES256(user.password);
      if (decryptedPassword === password) {
        const { password, ...result } = user;
        // return result;
        const payload = {
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
        };
        return {
          accessToken: this.jwtService.sign(payload),
          data: user,
        };
      }
    }
    return null;
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
