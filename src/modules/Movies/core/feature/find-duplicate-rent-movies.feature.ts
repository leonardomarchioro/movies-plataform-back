import { RentMovies } from "@prisma/client";
import { RentMoviesDto } from "../../infra/dtos/rent-movies.dto";

export abstract class FindDuplicateRentMoviesFeature {
    abstract execute(ids: RentMoviesDto, userId: number): Promise<RentMovies>
}