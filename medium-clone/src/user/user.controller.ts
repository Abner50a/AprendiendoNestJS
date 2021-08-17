import { Body, Controller, Post } from '@nestjs/common';
import { createUserDto } from './createUser.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  //createUser(): Promise<any> => Se crea cuando estamos definiendo algun controllador y aun  no tenemos algun servicio.
  @Post('users')
  async createUser(@Body('user') createUserDto : createUserDto ): Promise<any> {
    return await this.userService.createUser(createUserDto);
  }
}
