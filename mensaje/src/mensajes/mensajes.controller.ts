///Para crear este controllador automaticamente se usa el comando de abajo

//1 - mensaje/ la carpeta donde sera alojada el controlador
//2 - mensaje nombre del controlador
//3 - no crea una carpeta extra llamada controllers
/// nest generate controller mensajes/mensajes --flat
import { Controller,Get,Post,Put } from '@nestjs/common';

@Controller('mensajes')
export class MensajesController {

  @Get()
  listMensajes(){}

  @Post()
  createMensaje(){}

  @Get('/id')
  getMensaje(){}

}
