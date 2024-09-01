import { Router } from 'express';
import OrdersController from '../controllers/ordersController';
const ordersRouter = Router();

const ordersController = new OrdersController();

ordersRouter.get('/get-all-orders', ordersController.getAllOrders)

export default ordersRouter;
