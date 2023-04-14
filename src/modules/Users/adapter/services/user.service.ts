import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "../../infra/dtos/create-user-dto";
import { CreateUserFeature } from "../../core/features/create-user.feature";
import { CreatedUserDto } from "../../infra/dtos/created-user-dto";
import { EncryptDataFeature } from "src/modules/Authentication/core/features/encrypt-data.feature";

@Injectable()
export class UserService {
    constructor(
        private readonly createUserFeature: CreateUserFeature,
        private readonly encryptPasswordFeature: EncryptDataFeature    
    ){}

    async create(user: CreateUserDto): Promise<CreatedUserDto>{

        const { data: password } = await this.encryptPasswordFeature.perform(user.password)

        const { password: _, ...createdUser } = await this.createUserFeature.execute({...user, password})

        return new CreatedUserDto(createdUser);
    }

    async find(id: number){}
}