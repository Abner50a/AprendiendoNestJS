/// npm install class-validator class-transformer
///Pasos para crear pipe


/* 1) Poner pipe a nivel global " app.useGlobalPipes(new ValidationPipe());"
2) Crear una clase que describa las diferentes propiedades que deberia tener Data Transfer Objet doNotTrack
3) Agregar las reglas de valiodacion a la clase 
4) Aplicar las reglas al controllador */


import { ClassSerializerInterceptor } from "@nestjs/common"
import { IsString } from "class-validator";


export class CreateMensajeDto {
  @IsString()
  content: string;


}