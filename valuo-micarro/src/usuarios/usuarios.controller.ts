import { Body, Controller, Post,Get,Param,Patch,Query,Delete,NotFoundException } from '@nestjs/common';
import { CrearUsuarioDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

import { UsuariosService } from './usuarios.service';

@Controller('auth')
export class UsuariosController {
  constructor(private userService: UsuariosService) {}

  @Post('/signup')
  crearUsuario(@Body() body: CrearUsuarioDto) {
    this.userService.create(body.email, body.password);
  }

  @Get('/:id')
  async finduser(@Param('id') id: string){
    //Param extrae el valor de la url por ejemplo /:id este va estraer el valor de la id
    const user = await this.userService.findOne(parseInt(id));

    if(!user){
      throw new NotFoundException('usuario no encontrado')
    }

    return user;
  }

  @Get()
  buscarUsuarios(@Query('email') email: string){
    return this.userService.find(email);
  }

  @Delete('/:id')
  removeUser(@Param('id')  id:string  ){
    return this.userService.remove(parseInt(id));
  }
  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body:  UpdateUserDto ){
    return this.userService.update(parseInt(id), body)
  }
}
