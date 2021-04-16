import { Router } from 'express';

import AddressController from './app/controllers/AddressController';

const routes = new Router();

routes.post('/addresses', AddressController.createCity);

export default routes;
