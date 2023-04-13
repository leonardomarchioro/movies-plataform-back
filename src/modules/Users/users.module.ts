import { Module } from '@nestjs/common';
import { generateModule } from '../../global/helpers/nestjs.helper';


@Module(
  generateModule({
    providers: [],
  }),
)
export class UsersModule {}
