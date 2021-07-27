import { NestFactory } from '@nestjs/core';
import { MensajesModule } from './mensajes/mensajes.module';


async function bootstrap() {
  const app = await NestFactory.create(MensajesModule);
  await app.listen(3000);
}
bootstrap();
