import { Router } from 'express';
import OngsController from './app/controllers/OngsController';

const routes = Router();

routes.get('/', (_, req) =>
  req.json({ message: 'Welcome to be the hero API' }),
);

routes.route('/ongs').post(OngsController.store);

export default routes;
