import tasksRouter from "../tasks/TasksRouter";
import statusesRouter from "../statuses/StatusesRouter";
import todolistRouter from "../todolist/TodolistRouter";
import home from "../home";


export default function routes(app){
  app.use('/tasks', tasksRouter);
  app.use('/statuses', statusesRouter);
  app.use('/todolist', todolistRouter);
  app.use('/', home);
}

