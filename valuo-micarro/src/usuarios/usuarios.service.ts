import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuarios } from './usuarios.entity';
@Injectable()
export class UsuariosService {
  constructor(@InjectRepository(Usuarios) private repo: Repository<Usuarios>) {}

  create(email: string, password: string) {
    const usuario = this.repo.create({ email, password });

    return this.repo.save(usuario);
  }

  findOne(id: number) {
    return this.repo.findOne(id);
  }

  find(email: string) {
    return this.repo.find({ email });
  }

  async update(id: number, attrs: Partial<Usuarios>) {
    const usuario = await this.findOne(id);
    if (!usuario) {
      throw new Error('User not found');
    }
    Object.assign(usuario, attrs);
    return this.repo.save(usuario);
  }

  async remove(id: number) {
    const usuario = await this.findOne(id);
    if (!usuario) {
      throw new Error('Usuario no funciona');
    }

    return this.repo.remove(usuario);
  }
}
