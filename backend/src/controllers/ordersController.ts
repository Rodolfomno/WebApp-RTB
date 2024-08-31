import { Request, Response, NextFunction } from 'express';
import orderService from '../service/orderService';

export default class ordersController {

    public getAllOrders = async (_req: Request, res: Response, _next: NextFunction) => {

        const allOrders = await orderService.getAll();

        return res.status(201).json(allOrders);
    }

}
