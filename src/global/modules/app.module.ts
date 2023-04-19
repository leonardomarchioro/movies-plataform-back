import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { DataBaseModule } from './database.module';
import { UsersModule } from '../../modules/Users/infra/modules/users.module';
import { AuthModule } from '../../modules/Authentication/infra/modules/authentication.module';
import { MovieModule } from '../../modules/Movies/infra/modules/movies.module';
import { middlewaresHandler } from '../handlers/middlewares.handler';


@Module({
  imports: [
    DataBaseModule,
    AuthModule,
    UsersModule,
    MovieModule
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    middlewaresHandler(consumer)
  }
}
