import { Router } from 'express';
import getTasks from './getTasks';
import updateTask from './updateTask';
import postTasks from './postTasks';
import deleteTasks from './deleteTasks';

const tasksRouter = Router();

tasksRouter.get('/', getTasks);
tasksRouter.post('/', postTasks);
tasksRouter.patch('/:userId', updateTask);
tasksRouter.delete('/:userId', deleteTasks);


export default tasksRouter;