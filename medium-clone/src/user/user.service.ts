import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService{


  async createUser(){
    return 'crear servicio desde servicio'
  }
}