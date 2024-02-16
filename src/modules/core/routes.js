import tasksRouter from '../tasks/TasksRoutes';
import home from '../home';
import todolistRouter from '../todolist/TodolistRoutes';

export default function routes(app){
  app.use('/tasks', tasksRouter);
  app.use('/todolist', todolistRouter);
  app.use('/', home);
}

