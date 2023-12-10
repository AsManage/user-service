import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserPermissionOrm, UserRoleOrm } from './orms';
import { UserPermissionRoleMappingOrm } from './orms/user-role-permission-mapping.orm';
import { UserInfoOrm } from './orms/user.orm';
import { UserPermissionGroupOrm } from './orms/user-permission-group.orm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forRoot()],
      useFactory: (configService: ConfigService) => {
        return {
          type: 'mysql',
          host: configService.get('DB_HOST'),
          port: +configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_NAME'),
          entities: [
            UserPermissionOrm,
            UserPermissionRoleMappingOrm,
            UserRoleOrm,
            UserInfoOrm,
            UserPermissionGroupOrm,
          ],
          synchronize: false,
        };
      },
      inject: [ConfigService],
    }),
    ClientsModule.register([
      { name: 'USER_SERVICE', transport: Transport.TCP },
    ]),
    TypeOrmModule.forFeature([
      UserPermissionOrm,
      UserPermissionRoleMappingOrm,
      UserRoleOrm,
      UserInfoOrm,
      UserPermissionGroupOrm,
    ]),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
