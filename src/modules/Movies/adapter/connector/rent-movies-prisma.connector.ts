import { Injectable } from "@nestjs/common";
import { RentMoviesFeature } from "../../core/feature/rent-movies.feature";
import { PrismaRepository } from "../../../../global/repositories/prisma.repository";
import { RentedMovieModel } from "../../core/models/rented-movie.model";
import { RentMoviesDto } from "../../infra/dtos/rent-movies.dto";

@Injectable()
export class RentMoviesPrismaConnector implements RentMoviesFeature {
    constructor(private readonly prisma: PrismaRepository) {}

    async execute({ ids }: RentMoviesDto, userId: number): Promise<RentedMovieModel[]> {

        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 2)

        const data = ids.map(id => ({
            externalId: id,
            rentalExpiration: new Date(currentDate),
            userId
        }))

        const movies = await this.prisma.rentMovies.createMany({
            data
        })
        console.log({movies})
        return this.prisma.rentMovies.findMany({
            where: { userId }
        })
    }
}