import { DataTypes, Model, Sequelize, Options } from 'sequelize';
import config from '../config/database';
import Sellers from './sellersModel';

const db = new Sequelize(config as Options);

class Orders extends Model {
  public orderId!: Number;

  public country!: String;

  public product!: String;

  public seller!: Number;

  public price!: Number;

}

Orders.init({
  orderId: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  country: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  product: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  seller: {
    allowNull: false,
    type: DataTypes.NUMBER,
  },
  price: {
    allowNull: false,
    type: DataTypes.NUMBER,
  },
}, 
{
  underscored: true,
  sequelize: db,
  modelName: 'ORDERS',
  timestamps: false,
})

Orders.belongsTo(Sellers, { foreignKey: 'orderId', as: 'sellers' });


export default Orders;


// module.exports = (sequelize, DataTypes) => {
//     const Orders = sequelize.define('Orders', {
//       orderId: { type: DataTypes.INTEGER, primaryKey: true },
//       country: DataTypes.STRING,
//       product: DataTypes.STRING,
//       price: DataTypes.INTEGER,
//       seller: { type: DataTypes.INTEGER, foreignKey: true },
//     },
//     {
//       timestamps: false,
//       tableName: 'ORDERS',
//       underscored: true,
//     });
  
//     Orders.associate = (models) => {
//       Orders.belongsTo(models.Sellers,
//         { foreignKey: 'orderId', as: 'Sellers' });
//     };
  
//     return Orders;
//   };