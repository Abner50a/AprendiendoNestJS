import { BadRequestException, Injectable} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import {  randomBytes  , scrypt as _scrypt} from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);



@Injectable()
export class AuthService {
  constructor(private userService: UsuariosService){}

  async registrarse(email: string, password: string) {
    //Ver si el correo esta libre

    const usuario = await this.userService.find(email);
    if(usuario.length){
      throw new BadRequestException('Correo en uso')
    }

    //Hash el paswsword del usuario

        //Generar un salt
        
        const salt = randomBytes(8).toString('hex');


        //Hashear el salt y el password juntos

        const hash = (await scrypt(password,salt, 32)) as Buffer;

        //Unir el hast del usuario y password

        const resultado = salt + '.' +hash.toString('hex');

    //Crear un usuario y guardarlo

        const usuarioSave = await this.userService.create(email,resultado);

    //regresar el usuario
    
    return usuarioSave;
  }


  iniciarSesion() {

  }
  
}