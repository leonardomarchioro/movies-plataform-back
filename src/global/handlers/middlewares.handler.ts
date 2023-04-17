import { MiddlewareConsumer, RequestMethod } from "@nestjs/common";
import { CheckRentTimeMoviesMiddleware } from "../../modules/Movies/infra/middlewares/check-rent-time-movies.middleware";
import { CheckDuplicateRentMoviesMiddleware } from "../../modules/Movies/infra/middlewares/check-duplicate-rent-movies.middleware";

export const middlewaresHandler = (consumer: MiddlewareConsumer) => {

    consumer.apply(CheckRentTimeMoviesMiddleware)
    .forRoutes({ path: "/movies", method: RequestMethod.ALL });

    consumer.apply(CheckDuplicateRentMoviesMiddleware)
    .forRoutes({ path: "/movies", method: RequestMethod.POST });
}