import { Router } from 'express';

import OngController from './app/controllers/OngController';
import IncidentController from './app/controllers/IncidentController';
import ProfileController from './app/controllers/ProfileController';
import SessionController from './app/controllers/SessionController';

import Validators from './app/middlewares/Validators';

const routes = Router();

routes.get('/', (_, req) =>
  req.json({ message: 'Welcome to be the hero API' }),
);

routes.route('/session').post(SessionController.store);

routes
  .route('/ongs')
  .get(OngController.index)
  .post(Validators.ongs.store(), OngController.store);

routes.get('/profile', Validators.profile.index(), ProfileController.index);

routes
  .route('/incidents')
  .get(Validators.incidents.index(), IncidentController.index)
  .post(Validators.incidents.store(), IncidentController.store);

routes.delete(
  '/incidents/:id',
  Validators.incidents.delete(),
  IncidentController.delete,
);

export default routes;
