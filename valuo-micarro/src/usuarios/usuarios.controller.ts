import { Body, Controller, Post, Get, Param, Patch, Query, Delete, NotFoundException, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { SerializableInterceptor } from 'src/interceptors/serialize.interceptor';
import { CrearUsuarioDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserDto } from './dtos/user.dto';

import { UsuariosService } from './usuarios.service';


@Controller('auth')
export class UsuariosController {
  constructor(private userService: UsuariosService) { }

  @Post('/signup')
  crearUsuario(@Body() body: CrearUsuarioDto) {
    this.userService.create(body.email, body.password);
  }

  @UseInterceptors(new SerializableInterceptor(UserDto)) //Hacemos un intercept personalizado para esta clase
  @Get('/:id')
  async finduser(@Param('id') id: string) {
    //Param extrae el valor de la url por ejemplo /:id este va estraer el valor de la id
  //  console.log('handler esta curriendo')
    const user = await this.userService.findOne(parseInt(id));

    if (!user) {
      throw new NotFoundException('usuario no encontrado')
    }

    return user;
  }

  @Get()
  buscarUsuarios(@Query('email') email: string) {
    return this.userService.find(email)
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.userService.remove(parseInt(id));
  }
  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.userService.update(parseInt(id), body)
  }


}
