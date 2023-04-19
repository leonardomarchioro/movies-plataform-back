import { Module } from "@nestjs/common";
import { generateModule, provider } from "../../../../global/helpers/nestjs.helper";
import { DataBaseModule } from "../../../../global/modules/database.module";
import { UsersModule } from "../../../Users/infra/modules/users.module";
import { MovieController } from "../controllers/movies.controller";
import { MovieService } from "../../adapter/service/movies.service";
import { RentMoviesFeature } from "../../core/feature/rent-movies.feature";
import { RentMoviesPrismaConnector } from "../../adapter/connector/rent-movies-prisma.connector";
import { AuthModule } from "../../../Authentication/infra/modules/authentication.module";
import { FindRentMoviesFeature } from "../../core/feature/find-rent-movies.feature";
import { FindRentMoviesApiConnector } from "../../adapter/connector/find-rent-movies-api.connector";
import { FinishRentMoviesFeature } from "../../core/feature/finish-rent-movies.feature";
import { FinishRentMoviesPrismaConnector } from "../../adapter/connector/finish-rent-movies-prisma.connector";
import { FindDuplicateRentMoviesPrismaConnector } from "../../adapter/connector/find-duplicate-rent-movies-prisma.connector";
import { FindDuplicateRentMoviesFeature } from "../../core/feature/find-duplicate-rent-movies.feature";

@Module(
    generateModule({
        imports: [
            DataBaseModule,
            UsersModule,
            AuthModule
        ],
        providers: [
            provider(RentMoviesFeature, RentMoviesPrismaConnector),
            provider(FindRentMoviesFeature, FindRentMoviesApiConnector),
            provider(FinishRentMoviesFeature, FinishRentMoviesPrismaConnector),
            provider(FindDuplicateRentMoviesFeature, FindDuplicateRentMoviesPrismaConnector),
            MovieService, 
        ],
        controllers: [MovieController]
    })
)
export class MovieModule {}