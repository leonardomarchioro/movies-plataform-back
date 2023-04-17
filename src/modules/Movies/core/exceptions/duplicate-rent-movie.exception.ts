import { HttpException, HttpStatus } from '@nestjs/common';

export class DuplicateRentMovieException extends HttpException {
    constructor(message: string = "This movie has already been rented") {
        super(message, HttpStatus.CONFLICT)
    }
}