import { Router } from 'express';
import getTasks from './getTasks.js';
import updateTask from './updateTask.js';
import postTasks from './postTasks.js';
import deleteTasks from './deleteTasks.js';

const tasksRouter = Router();

tasksRouter.get('/', getTasks);
tasksRouter.post('/', postTasks);
tasksRouter.patch('/:taskId', updateTask);
tasksRouter.delete('/:taskId', deleteTasks);

export default tasksRouter;
