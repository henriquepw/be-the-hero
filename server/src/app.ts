import express from 'express';
import routes from './routes';

class App {
  server: express.Application;

  constructor() {
    this.server = express();

    // this.database();
    this.middleware();
    this.routes();
  }

  // private database() {}

  private middleware() {
    this.server.use(express.json());
  }

  private routes() {
    this.server.use(routes);
  }
}

export default new App().server;
