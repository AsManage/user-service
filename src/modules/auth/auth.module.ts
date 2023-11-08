import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthInfoEntity } from 'src/orms';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AuthInfoEntity])],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
