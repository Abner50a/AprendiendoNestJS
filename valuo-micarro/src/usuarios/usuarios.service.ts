import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuarios } from './usuarios.entity';
@Injectable()
export class UsuariosService {
  constructor(@InjectRepository(Usuarios) private repo: Repository<Usuarios>) {}

  create(email: string, password: string){
    const usuario = this.repo.create({email,password});

    return this.repo.save(usuario);
  }
}
