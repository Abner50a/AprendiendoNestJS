import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { MensajesModule } from './mensajes/mensajes.module';

async function bootstrap() {
  const app = await NestFactory.create(MensajesModule);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
