import { HttpException, HttpStatus } from "@nestjs/common";

export class MissingAuthorizationTokenException extends HttpException {
    constructor(message: string = "Missing authorization token") {
        super(message, HttpStatus.UNAUTHORIZED)
    }
}