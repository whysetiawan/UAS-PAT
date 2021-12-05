import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtSecretKey } from 'src/constants';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtAuthStrategy } from './jwt.auth.strategy';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: jwtSecretKey,
      signOptions: {
        expiresIn: '7d',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtAuthStrategy],
  exports: [AuthService],
})
export class AuthModule {}
