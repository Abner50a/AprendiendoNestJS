import {AfterInsert,AfterRemove,AfterUpdate, Entity,Column, PrimaryColumn } from "typeorm";

@Entity()
export class Usuarios {

  @PrimaryColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;


  @AfterInsert()
  logInsert(){
    console.log('Insertar usuario con id', this.id);
  }

  @AfterUpdate()
  logUpdate(){
    console.log('actualizar usuario con id', this.id);
  }

  
  @AfterRemove()
  logRemove(){
    console.log('Borrar usuario con id', this.id);
  }
}