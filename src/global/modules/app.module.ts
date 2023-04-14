import { Module } from '@nestjs/common';
import { DataBaseModule } from './database.module';
import { UsersModule } from '../../modules/Users/infra/modules/users.module';


@Module({
  imports: [
    DataBaseModule,
    UsersModule
  ],
})
export class AppModule {}
