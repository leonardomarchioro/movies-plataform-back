import { Module } from '@nestjs/common';
import { generateModule, provider } from '../../../../global/helpers/nestjs.helper';
import { DataBaseModule } from '../../../../global/modules/database.module';
import { AuthModule } from '../../../Authentication/infra/modules/authentication.module';
import { UserService } from '../../adapter/services/user.service';
import { CreateUserFeature } from '../../core/features/create-user.feature';
import { CreateUserUsecase } from '../../core/usecases/create-user.usercase';
import { CreateUserProtocol } from '../../core/protocols/create-user.protocol';
import { CreateUserPrismaConnector } from '../../adapter/connectors/create-user-prisma.connector';
import { UserController } from '../controllers/user.controller';


@Module(
  generateModule({
    imports: [DataBaseModule, AuthModule],
    providers: [
      provider(CreateUserFeature, CreateUserUsecase),
      provider(CreateUserProtocol, CreateUserPrismaConnector),
      UserService
    ],
    controllers: [UserController]
  }),
)
export class UsersModule {}
