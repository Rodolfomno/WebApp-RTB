import mockDBSellers from '../../sellers.json';
import orderService from './orderService';

type Seller = {
  name: string,
  id: number,
  totalSales: number,
}[]

export default class sellersService  {
  public static getAll() {
    return mockDBSellers;
  }

  public static getTopSellers() {

    const sellers: Seller = []

    const allSellers = mockDBSellers;
    const allOrders = orderService.getAll();
    
    for(const { id, name } of allSellers) {
        const sales = allOrders.filter((item) => item.seller === id);
        let totalSales = 0;

        sales.forEach((item) => totalSales = totalSales + item.price)
        sellers.push({ id, name, totalSales })
    }

    return sellers.sort((a, b) => b.totalSales - a.totalSales);
  }
}