import { Router } from 'express';
import updateStatus from './updateStatus';
import postStatus from './postStatus';
import deleteStatus from './deleteStatus';
import getStatuses from "./getStatuses";

const statusesRouter = Router();

statusesRouter.get('/', getStatuses);
statusesRouter.post('/', postStatus);
statusesRouter.patch('/:statusId', updateStatus);
statusesRouter.delete('/:statusId', deleteStatus);

export default statusesRouter;
