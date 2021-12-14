import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/users.models';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';

import 'dotenv/config';
import { JwtStrategy } from '../strategies/jwt.strategy';

const AUTH_SECRET = process.env.AUTH_SECRET;
const AUTH_TOKEN_TTL = process.env.AUTH_TOKEN_TTL;

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: AUTH_SECRET,
      signOptions: { expiresIn: AUTH_TOKEN_TTL },
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
