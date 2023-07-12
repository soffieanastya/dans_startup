import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("pk_id_user", ["idUser"], { unique: true })
@Entity("users", { schema: "public" })
export class Users {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_user" })
  idUser: number;

  @Column("character varying", { name: "username", nullable: true, length: 50 })
  username: string | null;

  @Column("character varying", {
    name: "password",
    nullable: true,
    length: 255,
  })
  password: string | null;
}
