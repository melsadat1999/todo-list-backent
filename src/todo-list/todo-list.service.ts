import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoListDto } from './dto/create-todo-list.dto';
import { UpdateTodoListDto } from './dto/update-todo-list.dto';
import { TodoList } from './entities/todo-list.entity';

@Injectable()
export class TodoListService {
  constructor(
    @InjectRepository(TodoList)
    private todoListRepository: Repository<TodoList>,
  ) {}
  async create(createTodoListDto: CreateTodoListDto) {
    const saveTask = await this.todoListRepository.save(createTodoListDto);
    return saveTask;
  }

  async findAll() {
    return await this.todoListRepository.find();
  }

  async findOne(id: number) {
    return await this.todoListRepository.findOne({ where: { id } });
  }

  async update(id: number, updateTodoListDto: UpdateTodoListDto) {
    await this.todoListRepository.update(id, updateTodoListDto);
    return await updateTodoListDto;
  }

  async remove(id: number) {
    return await this.todoListRepository.delete(id);
  }
}
