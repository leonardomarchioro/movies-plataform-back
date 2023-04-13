import { DynamicModule, ForwardReference, Provider, Type } from '@nestjs/common'

interface IModule {
    providers?: Provider<any>[];
    controllers?: Type<any>[];
    imports?:
    | (
        | Type<any>
        | DynamicModule
        | Promise<DynamicModule>
        | ForwardReference<any>
      )[]
}


export function generateModule({ controllers, imports, providers }: IModule){

    return {
        controllers,
        imports,
        providers,
        exports: [...providers]
    };
}