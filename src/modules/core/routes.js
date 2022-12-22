import tasksRouter from '../tasks/TasksRoutes';
import statusesRouter from '../statuses/StatusesRoutes';
import home from '../home';

export default function routes(app){
  app.use('/tasks', tasksRouter)
  app.use('/statuses', statusesRouter)
  app.use('/', home)
}

