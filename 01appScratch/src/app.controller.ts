import { Controller, Get } from '@nestjs/common';

//Controlador Main
@Controller()
export class AppController {
  @Get()
  getRootRoute() {
    return 'hola aqui S';
  }
}
