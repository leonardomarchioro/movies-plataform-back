import { Injectable } from "@nestjs/common";
import { CreateUserProtocol } from "../../core/protocols/create-user.protocol";
import { PrismaRepository } from "../../../../global/repositories/prisma.repository";
import { CreateUserModel } from "../../core/models/create-user.model";
import { CreatedUserModel } from "../../core/models/created-user.model";

@Injectable()
export class CreateUserPrismaConnector implements CreateUserProtocol {
    constructor(private readonly prisma: PrismaRepository) {}

    async execute(user: CreateUserModel): Promise<CreatedUserModel> {
        return this.prisma.user.create({
            data: user
        })
    }
}