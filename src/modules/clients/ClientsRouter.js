import { Router } from 'express';
import getClients from './getClients';
import updateClient from './updateClient';
import postClient from './postClient';
import deleteClient from './deleteClient';

const serviceRouter = Router();

serviceRouter.get('/', getClients);
serviceRouter.post('/', postClient);
serviceRouter.patch('/:clientId', updateClient);
serviceRouter.delete('/:clientId', deleteClient);

export default serviceRouter;