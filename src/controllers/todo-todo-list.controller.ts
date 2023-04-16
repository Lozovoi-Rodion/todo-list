import {repository} from '@loopback/repository';
import {param, get, getModelSchemaRef} from '@loopback/rest';
import {Todo, TodoList} from '../models';
import {TodoRepository} from '../repositories';

export class TodoTodoListController {
  constructor(
    @repository(TodoRepository)
    public todoRepository: TodoRepository,
  ) {}

  
}
