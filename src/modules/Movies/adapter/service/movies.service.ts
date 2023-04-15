import { Injectable } from "@nestjs/common";
import { RentMoviesDto } from "../../infra/dtos/rent-movies.dto";
import { RentMoviesFeature } from "../../core/feature/rent-movies.feature";
import { FindRentMoviesFeature } from "../../core/feature/find-rent-movies.feature";

@Injectable()
export class MovieService {
    constructor(
        private readonly rentMoviesFeature: RentMoviesFeature,
        private readonly findRentMoviesFeature: FindRentMoviesFeature
    ) {}

    async findRentMovies(userId: number) {
        return this.findRentMoviesFeature.execute(userId);
    }

    async rentMovies(ids: RentMoviesDto, userId: number) {
        return this.rentMoviesFeature.execute(ids, userId);
    }
}