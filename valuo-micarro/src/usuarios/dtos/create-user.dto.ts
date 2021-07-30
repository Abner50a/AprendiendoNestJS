//npm install class-validator class-transformer
import {   IsEmail,IsString } from 'class-validator';
export class CrearUsuarioDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}