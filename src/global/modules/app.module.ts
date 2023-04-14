import { Module } from '@nestjs/common';
import { DataBaseModule } from './database.module';
import { UsersModule } from '../../modules/Users/infra/modules/users.module';
import { AuthModule } from '../../modules/Authentication/infra/modules/authentication.module';


@Module({
  imports: [
    DataBaseModule,
    AuthModule,
    UsersModule
  ],
})
export class AppModule {}
