import {Body, Controller,Post } from '@nestjs/common';
import { CrearUsuarioDto } from './dtos/create-user.dto';

@Controller('auth')
export class UsuariosController {

  @Post('/signup')
  crearUsuario (@Body() body : CrearUsuarioDto){
    console.log(body)
  }


}
