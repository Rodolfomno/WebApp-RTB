import { Request, Response, NextFunction } from 'express';
import orderService from '../service/orderService';

export default class ordersController {

    public getAllOrders = (_req: Request, res: Response, _next: NextFunction) => {

        const allOrders = orderService.getAll();

        return res.status(201).json(allOrders);
    }

}
