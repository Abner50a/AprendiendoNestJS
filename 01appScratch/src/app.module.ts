import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

//Agrupamos los controller en el modulo
@Module({
  controllers: [AppController],
})
export class AppModule {}
