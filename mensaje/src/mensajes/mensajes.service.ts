import { MensajesRepository } from './mensajes.repository';
export class MensajeService {
  mensajeRepo: MensajesRepository;

  constructor() {
    //Ejemplo esto no se hace en en producciíon
    this.mensajeRepo = new MensajesRepository();
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
