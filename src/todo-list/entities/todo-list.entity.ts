import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TodoList {
  @PrimaryGeneratedColumn() id: string;
  @Column() title: string;
}
