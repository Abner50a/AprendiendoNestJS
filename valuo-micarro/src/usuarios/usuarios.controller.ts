import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Patch,
  Query,
  Delete,
  NotFoundException,
  Session,
} from '@nestjs/common';

import { CrearUsuarioDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

import { UsuariosService } from './usuarios.service';

import { UserDto } from './dtos/user.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { AuthService } from './auth.service';

@Controller('auth')
@Serialize(UserDto)
export class UsuariosController {
  constructor(
    private userService: UsuariosService,
    private authService: AuthService,
  ) {}


  @Get('/quienSoy')
  quienSoy(@Session() session: any){
    return this.userService.findOne(session.userId);

  }

  @Post('/salir')
  cerrarSesion(@Session() session: any){
    session.userId = null;
    console.log(session.userId )

  }



  @Post('/signup')
  async crearUsuario(@Body() body: CrearUsuarioDto, @Session() session: any ) {
    const usuario = await this.authService.registrarse(body.email, body.password);
    session.userId = usuario.id;
    return usuario;
  }

  @Post('/login')
  async login(@Body() body: CrearUsuarioDto, @Session() session: any) {
    const usuario =await  this.authService.iniciarSesion(body.email, body.password);
    session.userId = usuario.id;
    return usuario;
  }

  // @Serialize(UserDto) //Hacemos un intercept personalizado para esta clase
  @Get('/:id')
  async finduser(@Param('id') id: string) {
    //Param extrae el valor de la url por ejemplo /:id este va estraer el valor de la id
    //  console.log('handler esta curriendo')
    const user = await this.userService.findOne(parseInt(id));

    if (!user) {
      throw new NotFoundException('usuario no encontrado');
    }

    return user;
  }

  @Get()
  buscarUsuarios(@Query('email') email: string) {
    return this.userService.find(email);
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.userService.remove(parseInt(id));
  }
  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.userService.update(parseInt(id), body);
  }
}
