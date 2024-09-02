import mockDBOrders from '../../orders.json'
import sellersService from './sellersService';

export default class  {

  public static getAll() {
    const allOrders = []
    const allSellers = sellersService.getAll()

    for (const order of mockDBOrders) {
      const seller = allSellers.find(({ id }) => id === order.seller)

      allOrders.push({
        price: order.price,
        orderId: order.orderId,
        country: order.country,
        seller: order.seller, 
        sellerName:  seller?.name,
        product: order.product,
      })
    }

    return allOrders;
  }

  public static getFilterOptions () {
    const countriesOptions: { label: string, value: string }[] = []
    
    for (const order of mockDBOrders) {
      const hasItem = countriesOptions.some((item) => item.label === order.country)

      if (!hasItem) countriesOptions.push({ value: order.country, label: order.country })
    }

    const sellersOptions: { label: string, value: string }[] = []

    const allSellers = sellersService.getAll();

    for (const seller of allSellers) {
      const hasItem = sellersOptions.some((item) => item.label === seller.name)

      if (!hasItem) sellersOptions.push({ value: seller.name, label: seller.name })
    }

    return { countriesOptions, sellersOptions }
  }
}