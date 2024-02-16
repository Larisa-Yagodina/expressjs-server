import tasksRouter from '../tasks/TasksRoutes';
import home from '../home';
import todolistRouter from '../todolist/TodolistRoutes';
import statusesRouter from '../statuses/StatusesRouter';

export default function routes(app){
  app.use('/tasks', tasksRouter);
  app.use('/statuses', statusesRouter);
  app.use('/todolist', todolistRouter);
  app.use('/', home);
}

