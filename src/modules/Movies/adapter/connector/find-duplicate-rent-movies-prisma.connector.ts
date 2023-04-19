import { Injectable } from "@nestjs/common";
import { FindDuplicateRentMoviesFeature } from "../../core/feature/find-duplicate-rent-movies.feature";
import { PrismaRepository } from "../../../../global/repositories/prisma.repository";
import { RentMovies } from "@prisma/client";
import { RentMoviesDto } from "../../infra/dtos/rent-movies.dto";

@Injectable()
export class FindDuplicateRentMoviesPrismaConnector implements FindDuplicateRentMoviesFeature {
    constructor(private readonly prisma: PrismaRepository) {}

    async execute({ ids }: RentMoviesDto, userId: number): Promise<RentMovies> {
        return this.prisma.rentMovies.findFirst({
            where: {
                externalId: { in: ids},
                userId
            }
        })
    }
}