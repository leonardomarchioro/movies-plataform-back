import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "../../adapter/services/user.service";
import { CreateUserDto } from "../dtos/create-user-dto";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async create(
        @Body() user: CreateUserDto
    ){
        return this.userService.create(user);
    }
}