import { Injectable } from "@nestjs/common";
import { PrismaRepository } from "../../../../global/repositories/prisma.repository";
import { FinishRentMoviesFeature } from "../../core/feature/finish-rent-movies.feature";

@Injectable()
export class FinishRentMoviesPrismaConnector implements FinishRentMoviesFeature {
    constructor(private readonly prisma: PrismaRepository) {}

    async execute(): Promise<void> {
        const currentDate = new Date();
        await this.prisma.rentMovies.deleteMany({
            where: {
              rentalExpiration: { lt: currentDate }
            }
          });
    }
}