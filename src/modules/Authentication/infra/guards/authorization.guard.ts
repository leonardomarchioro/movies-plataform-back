import {
    CanActivate,
    ExecutionContext,
    Injectable,
  } from '@nestjs/common'
import { AuthenticationService } from '../../adapter/services/authentication.service'
  
  @Injectable()
  export class AuthorizationGuard implements CanActivate {  
    constructor(private readonly service: AuthenticationService ) {}
  
    async canActivate(
      context: ExecutionContext,
    ): Promise<boolean> {
  
      const request = context.switchToHttp().getRequest()
  
      const { authorization } = request.headers
      if(!authorization){
        throw new Error('missing authorization token')
      }
      const [, token] = authorization.split(' ')

      const { userId } = await this.service.decodedToken(token)

      request.userId = userId
  
      return this.service.checkToken(token)
    }
  }
  