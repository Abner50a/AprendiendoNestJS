import {
  UseInterceptors,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';

import { plainToClass } from 'class-transformer';
import { map } from 'rxjs';
import { Observable } from 'rxjs';


export class SerializableInterceptor implements NestInterceptor {
  constructor(private dto:any ){}

  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    // Inicia algo antes de hacer un request
    //Por el manejo de request
    // console.log('Inicio algo antes de hacer un request',context);

    return handler.handle().pipe(
      map((data: any) => {
        //Inicio algo antes de enviar la repuesta o response.

        //  console.log('Inicio algo antes de enviar la repuesta o response', data);

        return plainToClass(this.dto, data, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
