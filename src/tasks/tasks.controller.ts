import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller()
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get('/tasks')
  getAllTasks() {
    return this.taskService.getTasks();
  }

  @Post('/tasks')
  createTask() {
    return this.taskService.createTask();
  }

  @Put('/tasks')
  updateTask() {
    return this.taskService.updateTask();
  }

  @Delete('/tasks')
  deleteTask() {
    return this.taskService.deleteTask();
  }

  @Patch('/tasks')
  updateTaskStatus() {
    return this.taskService.updateTaskStatus();
  }
}
