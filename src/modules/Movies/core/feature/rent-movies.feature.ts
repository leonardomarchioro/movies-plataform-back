import { RentMoviesDto } from "../../infra/dtos/rent-movies.dto";
import { RentedMovieModel } from "../models/rented-movie.model";

export abstract class RentMoviesFeature {
    abstract execute(ids: RentMoviesDto, userId: number): Promise<RentedMovieModel[]>
} 