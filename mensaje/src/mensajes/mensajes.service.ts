import { Injectable } from '@nestjs/common';
import { MensajesRepository } from './mensajes.repository';

///injectable usa para manerar las instancia de las clases y por lo general se aplican en repository y services.
@Injectable()
export class MensajeService {

  constructor(public mensajeRepo : MensajesRepository ) {
  }

  findOne(id: string) {
    return this.mensajeRepo.findOne(id);
  }

  findAll() {
    return this.mensajeRepo.findAll();
  }

  create(contenido: string) {
    return this.mensajeRepo.create(contenido);
  }
}
