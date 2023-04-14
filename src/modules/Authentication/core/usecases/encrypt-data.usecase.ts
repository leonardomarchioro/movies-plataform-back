import { Injectable } from "@nestjs/common";
import { EncryptDataProtocol } from "../protocols/encrypt-data.protocol";
import { EncryptDataFeature } from "../features/encrypt-data.feature";
import { EncryptedDataModel } from "../models/encrypted-data.model";

@Injectable()
export class EncryptDataUsecase implements EncryptDataFeature {
    constructor(private readonly encryptDataProtocol: EncryptDataProtocol) {}

    async perform(data: string): Promise<EncryptedDataModel> {
        return {
            data: await this.encryptDataProtocol.perform(data)
        }
    }
}