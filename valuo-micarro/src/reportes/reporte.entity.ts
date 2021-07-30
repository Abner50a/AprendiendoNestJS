import {  Entity, Column, PrimaryColumn   } from 'typeorm';

@Entity()
export class Reportes{
  @PrimaryColumn()
  id:number;

  @Column()
  precio: number;


}
