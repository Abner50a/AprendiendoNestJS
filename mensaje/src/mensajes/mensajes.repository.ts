
import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MensajesRepository {
  async findOne(id: string) {
    const contenido = await readFile('mensaje.json', 'utf-8');
    const mensaje = JSON.parse(contenido);

    return mensaje[id];
  }

  async findAll() {
    const contenido = await readFile('mensaje.json', 'utf-8');
    const mensaje = JSON.parse(contenido);

    return mensaje;
  }

  async create(contenido: string) {
    const contenidos = await readFile('mensaje.json', 'utf-8');
    const mensajes = JSON.parse(contenidos);

    const id = Math.floor(Math.random() * 999);

    mensajes[id] = { id, contenido: contenido };

    await writeFile('mensaje.json', JSON.stringify(mensajes));

    // {
    //   12 : {
    //     id: 12,
    //     content : "hola"
    //   }
    // }
  }
}
