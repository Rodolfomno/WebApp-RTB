import { Router } from 'express';
import SellersController from '../controllers/sellersController';
const sellersRouter = Router();

const sellersController = new SellersController();

sellersRouter.get('/get-all-sellers', sellersController.getAllSellers)
sellersRouter.get('/get-top-sellers', sellersController.getTopSellers)


export default sellersRouter;
