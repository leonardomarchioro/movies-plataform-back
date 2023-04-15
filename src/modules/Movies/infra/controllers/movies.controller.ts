import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { MovieService } from "../../adapter/service/movies.service";
import { AuthorizationGuard } from "../../../Authentication/infra/guards/authorization.guard";
import { UserId } from "../../../../global/decorators/get-user-id.decorator";
import { RentMoviesDto } from "../dtos/rent-movies.dto";

@Controller('movies')
export class MovieController {
    constructor(private readonly movieService: MovieService) {}

    // buscar meus filmes alugados
    @Get()
    @UseGuards(AuthorizationGuard)
    async findRentMovies(
        @UserId() userId: number
    ) {
        return this.movieService.findRentMovies(userId);
    }

    @Post()
    @UseGuards(AuthorizationGuard)
    async rentMovies(
        @UserId() userId: number,
        @Body() ids: RentMoviesDto
    ) {
        return this.movieService.rentMovies(ids, userId);
    }
    
}