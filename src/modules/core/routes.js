import tasksRouter from '../tasks/TasksRoutes';
import statusesRouter from '../statuses/StatusesRoutes';
import home from '../home';
import servicesRouter from '../services/ServicesRouter';
import clientsRouter from '../clients/ClientsRouter';
import ordersRouter from '../orders/OrdersRouter';
import todolistRouter from '../todolist/TodolistRoutes';

export default function routes(app){
  app.use('/tasks', tasksRouter);
  app.use('/statuses', statusesRouter);
  app.use('/services', servicesRouter);
  app.use('/clients', clientsRouter);
  app.use('/orders', ordersRouter);
  app.use('/todolist', todolistRouter);
  app.use('/', home);
}

