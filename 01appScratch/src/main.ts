import { Controller, Module, Get } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

//Controlador Main
@Controller()
class AppControler {
  @Get()
  getRootRoute() {
    return 'hola aqui';
  }
}
//Agrupamos los controller en el modulo
@Module({
  controllers: [AppControler]
})
class AppModule {

}
//Creamos
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}

bootstrap();
