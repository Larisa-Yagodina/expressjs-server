import { Router } from 'express';
import getTasks from './getTasks';
import updateTask from './updateTask';
import postTasks from './postTasks';
import deleteTasks from './deleteTasks';

const tasksRouter = Router();

tasksRouter.get('/', getTasks);
tasksRouter.post('/', postTasks);
tasksRouter.patch('/:taskId', updateTask);
tasksRouter.delete('/:taskId', deleteTasks);

export default tasksRouter;