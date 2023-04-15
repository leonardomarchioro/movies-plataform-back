import { HttpException, HttpStatus } from "@nestjs/common";

export class InvalidTokenException extends HttpException {
    constructor(message: string = "Invalid token declaration") {
        super(message, HttpStatus.UNAUTHORIZED)
    }
}