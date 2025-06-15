import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getTasks() {
    return 'Obteniendo todas las tareas';
  }

  createTask() {
    return 'Creando una nueva tarea';
  }

  updateTask() {
    return 'Actualizando una tarea existente';
  }

  deleteTask() {
    return 'Eliminando una tarea';
  }

  updateTaskStatus() {
    return 'Actualizando el estado de una tarea';
  }
}
