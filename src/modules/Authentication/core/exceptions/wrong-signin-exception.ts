import { HttpException, HttpStatus } from "@nestjs/common";

export class WrongSigninException extends HttpException {
    constructor(message: string = "Wrong email or password") {
        super(message, HttpStatus.UNAUTHORIZED)
    }
}