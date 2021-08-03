import { Body, Controller, Post,Get,Param,Patch,Query } from '@nestjs/common';
import { CrearUsuarioDto } from './dtos/create-user.dto';
import { UsuariosService } from './usuarios.service';

@Controller('auth')
export class UsuariosController {
  constructor(private userService: UsuariosService) {}

  @Post('/signup')
  crearUsuario(@Body() body: CrearUsuarioDto) {
    this.userService.create(body.email, body.password);
  }
}
