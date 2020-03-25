import { Router } from 'express';

const route = Router();

route.get('/', (_, req) => req.json({ message: 'Welcome to be the hero API' }));

export default route;
