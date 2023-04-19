import { IsInt, IsDate } from 'class-validator'
import { RentedMovieModel } from '../../core/models/rented-movie.model'

export class RentedMovieDto implements RentedMovieModel {
    @IsInt()
    id: number
  
    @IsInt()
    externalId: number

    @IsDate()
    rentalExpiration: Date

    constructor(builder: RentedMovieModel) {
      Object.assign(this, builder)
    }
  }
  