import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { FindDuplicateRentMoviesFeature } from "../../core/feature/find-duplicate-rent-movies.feature";
import { DuplicateRentMovieException } from "../../core/exceptions/duplicate-rent-movie.exception";


@Injectable()
export class CheckRentTimeMoviesMiddleware implements NestMiddleware {
  constructor(private readonly findDuplicateRentMoviesFeature: FindDuplicateRentMoviesFeature) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const duplicate = await this.findDuplicateRentMoviesFeature.execute(req.body, req.userId);
    if(duplicate) throw new DuplicateRentMovieException();

    next();
  }
}