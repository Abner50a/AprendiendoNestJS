import { Injectable} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';


@Injectable()
export class AuthService {
  constructor(private userService: UsuariosService){}

  
}