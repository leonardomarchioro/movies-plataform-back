import { Module } from '@nestjs/common';
import { generateModule, provider } from '../../../../global/helpers/nestjs.helper';
import { EncryptDataProtocol } from '../../core/protocols/encrypt-data.protocol';
import { BcryptEncryptDataConnector } from '../../adapter/connectors/bcrypt-encrypt-data.connector';
import { EncryptDataUsecase } from '../../core/usecases/encrypt-data.usecase';
import { EncryptDataFeature } from '../../core/features/encrypt-data.feature';


@Module(
  generateModule({
    providers: [
      provider(EncryptDataFeature, EncryptDataUsecase),
      provider(EncryptDataProtocol, BcryptEncryptDataConnector),

    ],
  }),
)
export class AuthModule {}
