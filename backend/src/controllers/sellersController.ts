import { Request, Response, NextFunction } from 'express';
import sellersService from '../service/sellersService';

export default class SellersController {

    public getAllSellers = async (_req: Request, res: Response, _next: NextFunction) => {

        const allSellers = await sellersService.getAll();

        return res.status(201).json(allSellers);
    }

    public getTopSellers = async (_req: Request, res: Response, _next: NextFunction) => {
        const topSellers = sellersService.getTopSellers();

        return res.status(201).json(topSellers);
    }
}
