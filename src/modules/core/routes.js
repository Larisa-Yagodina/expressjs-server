import tasksRouter from '../tasks/TasksRoutes';
import statusesRouter from '../statuses/StatusesRoutes';

export default function routes(app){
  app.use('/tasks', tasksRouter)
  app.use('/statuses', statusesRouter)
}

