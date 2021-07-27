import { Controller, Get } from '@nestjs/common';

//Controlador Main

//Si quiremos tener una ruta global se usara la de abajo y esta afectara a toda las rutas que tenga el controlador
@Controller('/app')
export class AppController {
  //Creamos una nueva ruta decorando get y su funcion 
  @Get('/')
  getRootRoute() {
    return 'hola aqui S';
  }

  @Get('/adios')
  getAdios(){
    return 'Adiosss'
  }
}
