import express from 'express';
import cors from 'cors';

import routes from './routes';

class App {
  server: express.Application;

  constructor() {
    this.server = express();

    this.middleware();
    this.routes();
  }

  private middleware() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  private routes() {
    this.server.use(routes);
  }
}

export default new App().server;
