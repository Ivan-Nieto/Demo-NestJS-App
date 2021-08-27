import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  age: number;

  constructor(name: string, age: number, id?: string) {
    this.name = name;
    this.age = age;
    if (id) this.id = id;
  }
}
