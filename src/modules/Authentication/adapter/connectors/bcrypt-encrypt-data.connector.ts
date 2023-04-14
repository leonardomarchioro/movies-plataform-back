import { hash } from 'bcryptjs'
import { EncryptDataProtocol } from '../../core/protocols/encrypt-data.protocol'
import { Injectable } from '@nestjs/common'

@Injectable()
export class BcryptEncryptDataConnector implements EncryptDataProtocol {
  private readonly SALTS = 8

  perform(data: string): Promise<string> {
    return hash(data, this.SALTS)
  }
}
