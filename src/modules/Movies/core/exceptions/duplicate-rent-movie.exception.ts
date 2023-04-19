import { HttpException, HttpStatus } from '@nestjs/common';

export class DuplicateRentMovieException extends HttpException {
    constructor(message: string = "Este filme já foi alugado") {
        super(message, HttpStatus.CONFLICT)
    }
}