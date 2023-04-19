import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { FinishRentMoviesFeature } from "../../core/feature/finish-rent-movies.feature";


@Injectable()
export class CheckRentTimeMoviesMiddleware implements NestMiddleware {
  constructor(private readonly finishRentMoviesFeature: FinishRentMoviesFeature) {}

  async use(req: Request, res: Response, next: NextFunction) {
    await this.finishRentMoviesFeature.execute();
    next();
  }
}