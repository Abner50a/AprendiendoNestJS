///Para crear este controllador automaticamente se usa el comando de abajo

//1 - mensaje/ la carpeta donde sera alojada el controlador
//2 - mensaje nombre del controlador
//3 - no crea una carpeta extra llamada controllers
/// nest generate controller mensajes/mensajes --flat

///Investigacion como funciona el HTTP Request

/* 

Line de inciio { POST /mensajes/31?hola=verdad HTTP/1.1 :}
Header  {
      Host: localhost:3000
      Content-Type: application/json
}
Body {
    {"contenido" : "Hola"}
} 

Decoradores 
          @Param('id') => por ejemplo 31
          @Query => por ejemplo hola
          @Body: => contenido

*/

import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMensajeDto } from './dtos/create-mensaje.dto';
import { MensajeService } from './mensajes.service';

@Controller('mensajes')
export class MensajesController {
  mensajeService : MensajeService;

  constructor(){
    //No hagas esto en produccion usaremos INJECTION pero para prueba usaremos por construtor hasta que entienda como funciona
    this.mensajeService = new MensajeService();
  }


  @Get()
  listMensajes() {
    return this.mensajeService.findAll()
  }

  @Post()
  createMensaje(@Body() body: CreateMensajeDto) {
   // console.log(body);
   return this.mensajeService.create(body.content);
  }

  @Get('/:id')
  getMensaje(@Param('id') id: string) {
    //console.log(id);
    return this.mensajeService.findOne(id);
  }
}
