//Para crear este modulo automaticamente se uso el comando de abajo
//nest generate module mensajes

import { Module } from '@nestjs/common';
import { MensajesController } from './mensajes.controller';

@Module({
  controllers: [MensajesController]
})
export class MensajesModule {}
