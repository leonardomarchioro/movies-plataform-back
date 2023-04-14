import { Injectable } from "@nestjs/common"
import { CreateUserFeature } from "../features/create-user.feature"
import { CreatedUserModel } from "../models/created-user.model"
import { CreateUserModel } from "../models/create-user.model"
import { CreateUserProtocol } from "../protocols/create-user.protocol"

@Injectable()
export class CreateUserUsecase implements CreateUserFeature {
  constructor(private readonly createUserProtocol: CreateUserProtocol) {}

  async execute(
    user: CreateUserModel,
    
  ): Promise<CreatedUserModel> {
    try {
      return this.createUserProtocol.execute(user)

    } catch (originalError) {
      console.log(originalError)
    }
  }
}
