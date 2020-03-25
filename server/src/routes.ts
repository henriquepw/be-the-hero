import { Router } from 'express';
import OngController from './app/controllers/OngController';
import IncidentController from './app/controllers/IncidentController';
import ProfileController from './app/controllers/ProfileController';
import SessionController from './app/controllers/SessionController';

const routes = Router();

routes.get('/', (_, req) =>
  req.json({ message: 'Welcome to be the hero API' }),
);

routes.route('/session').post(SessionController.store);

routes.route('/ongs').get(OngController.index).post(OngController.store);

routes.get('/profile', ProfileController.index);

routes
  .route('/incidents')
  .get(IncidentController.index)
  .post(IncidentController.store);

routes.delete('/incidents/:id', IncidentController.delete);

export default routes;
