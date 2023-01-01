import { Router } from 'express';
import getServices from './getServices';
import updateService from './updateService';
import postService from './postService';
import deleteService from './deleteService';

const serviceRouter = Router();

serviceRouter.get('/', getServices);
serviceRouter.post('/', postService);
serviceRouter.patch('/:serviceId', updateService);
serviceRouter.delete('/:serviceId', deleteService);

export default serviceRouter;