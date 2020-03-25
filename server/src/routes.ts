import { Router } from 'express';
import OngController from './app/controllers/OngController';
import IncidentController from './app/controllers/IncidentController';

const routes = Router();

routes.get('/', (_, req) =>
  req.json({ message: 'Welcome to be the hero API' }),
);

routes.route('/ongs').get(OngController.index).post(OngController.store);

routes
  .route('/incidents')
  .get(IncidentController.index)
  .post(IncidentController.store);

export default routes;
