import mockDBOrders from '../../orders.json'

export default class  {
  public static async getAll() {
    return mockDBOrders;
  }
}