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
    const user = await this.userService.findByUsername(username);
    console.log('return user', user);
    if (user) {
      const decryptedPassword = decryptFromAES256(user.password);
      console.log('decrypted password', decryptedPassword);
      if (decryptedPassword === password) {
        // const { password, ...result } = user;
        // return result;
        return this.generateAccessToken(user);
      }
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
