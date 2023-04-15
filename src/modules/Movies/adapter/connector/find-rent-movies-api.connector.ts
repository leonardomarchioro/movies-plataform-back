import { Injectable } from "@nestjs/common";
import { FindRentMoviesFeature } from "../../core/feature/find-rent-movies.feature";
import { PrismaRepository } from "../../../../global/repositories/prisma.repository";
import { moviesApi } from "../../../../global/helpers/movies-api.helper";
import { AxiosInstance } from "axios"

@Injectable()
export class FindRentMoviesApiConnector implements FindRentMoviesFeature {
    private readonly api: AxiosInstance = moviesApi

    constructor(private readonly prisma: PrismaRepository) {}

    async execute(userId: number): Promise<any> {

        const rentMovies = await this.prisma.rentMovies.findMany({ where: { userId } });

        const moviesList = []

        for (const { externalId } of rentMovies) {

            const movie = await this.api.get(`movie/${externalId}`).then(({ data }) => data).catch((err) => {throw new Error(err)})
            moviesList.push(movie)
        }

        return moviesList
    }
}