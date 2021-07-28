//Para crear este modulo automaticamente se uso el comando de abajo
//nest generate module mensajes

import { Module } from '@nestjs/common';
import { MensajesController } from './mensajes.controller';
import { MensajesRepository } from './mensajes.repository';
import { MensajeService } from './mensajes.service';

@Module({
  controllers: [MensajesController],
  //Cosa que usa como dependencia para otras clases
  ////Pasos para crear los injectores.
  /// 1 . Se crea los servicio y repository
  /// 2 . Agregar el decorador inyector a servicio y repositorio
  /// 3. Agregarlo en provider para que nestjs automaticamente haga su trabajo y cree las dependencia para los controladoree
   providers: [MensajeService,MensajesRepository]

})
export class MensajesModule {}
