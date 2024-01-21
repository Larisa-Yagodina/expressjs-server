import { Router } from 'express';
import getTodoItems from './getTodoItems';
import updateTodoItem from './updateTodoItem';
import postTodoItem from './postTodoItem';
import deleteTodoItem from './deleteTodoItem';

const todolistRouter = Router();

todolistRouter.get('/', getTodoItems);
todolistRouter.post('/', postTodoItem);
todolistRouter.patch('/:itemId', updateTodoItem);
todolistRouter.delete('/:itemId', deleteTodoItem);

export default todolistRouter;