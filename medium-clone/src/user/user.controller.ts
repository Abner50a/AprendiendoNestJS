import { Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  //createUser(): Promise<any> => Se crea cuando estamos definiendo algun controllador y aun  no tenemos algun servicio.
  @Post('users')
  async createUser(): Promise<any> {
    return await this.userService.createUser();
  }
}
