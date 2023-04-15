import { Module } from '@nestjs/common';
import { DataBaseModule } from './database.module';
import { UsersModule } from '../../modules/Users/infra/modules/users.module';
import { AuthModule } from '../../modules/Authentication/infra/modules/authentication.module';
import { MovieModule } from 'src/modules/Movies/infra/modules/movies.module';


@Module({
  imports: [
    DataBaseModule,
    AuthModule,
    UsersModule,
    MovieModule
  ],
})
export class AppModule {}
