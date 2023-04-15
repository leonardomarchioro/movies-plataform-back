import { IsArray } from 'class-validator'
import { RentMoviesModel } from '../../core/models/rent-movies.model'

export class RentMoviesDto implements RentMoviesModel {
    @IsArray()
    ids!: number[]
  
    constructor(builder: RentMoviesModel) {
      Object.assign(this, builder)
    }
  }
  