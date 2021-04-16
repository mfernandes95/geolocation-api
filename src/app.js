import 'dotenv/config';

import express from 'express';
import routes from './routes';

import swaggerJsDoc from './swagger.json';
import swaggerUi from 'swagger-ui-express';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.swagger();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  swagger() {
    this.server.use(
      '/api-docs',
      swaggerUi.serve,
      swaggerUi.setup(swaggerJsDoc)
    );
  }
}

export default new App().server;
