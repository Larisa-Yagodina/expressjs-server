import { Router } from 'express';
import getOrder from './getOrder';
import updateOrder from './updateOrder';
import postOrder from './postOrder';
import deleteOrder from './deleteOrder';

const ordersRouter = Router();

ordersRouter.get('/', getOrder);
ordersRouter.post('/', postOrder);
ordersRouter.patch('/:orderId', updateOrder);
ordersRouter.delete('/:orderId', deleteOrder);

export default ordersRouter;