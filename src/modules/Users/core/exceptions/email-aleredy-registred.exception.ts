import { HttpException, HttpStatus } from '@nestjs/common';

export class EmailAlreadyRegistredException extends HttpException {
    constructor(message: string = "Email already registred") {
        super(message, HttpStatus.CONFLICT)
    }
}