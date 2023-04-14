import {
    IsEmail,
    IsString,
    MaxLength,
    MinLength,
  } from 'class-validator'
  import { CreateUserModel } from '../../core/models/create-user.model'

  
  export class CreateUserDto implements CreateUserModel {
    @IsEmail()
    email!: string
  
    @IsString()
    @MinLength(2)
    @MaxLength(255)
    name!: string
  
    @IsString()
    password: string
  
    constructor(builder: CreateUserModel) {
      Object.assign(this, builder)
    }
  }
  