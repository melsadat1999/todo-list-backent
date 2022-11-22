import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TodoList {
  @PrimaryGeneratedColumn() id: number;
  @Column() title: string;
  @Column() isFinish: boolean;
}
