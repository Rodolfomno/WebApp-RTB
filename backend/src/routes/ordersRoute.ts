import { Router } from 'express';
import ordersController from '../controllers/ordersController';
const ordersRouter = Router();

const taskController = new ordersController();

ordersRouter.get('/get-all-orders', taskController.getAllOrders)

export default ordersRouter;
