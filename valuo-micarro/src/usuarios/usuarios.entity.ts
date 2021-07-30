import { Entity,Column, PrimaryColumn } from "typeorm";
@Entity()
export class Usuarios {

  @PrimaryColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;


}