import { DataTypes, Model, Sequelize, Options } from 'sequelize';
import config from '../config/database';
import Orders from './ordersModel';

const db = new Sequelize(config as Options);


class Sellers extends Model {
  public id!: Number;

  public name!: String;
}

Sellers.init({
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'SELLERS',
  timestamps: false,
})

Sellers.hasMany(Orders, { foreignKey: 'seller', as: 'orders' });


export default Sellers;



// module.exports = (sequelize, DataTypes) => {
//     const Seller = sequelize.define('Seller', {
//       id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//       name: DataTypes.STRING,
//     },
//     {
//       timestamps: false,
//       tableName: 'SELLERS',
//       underscored: true,
//     });
  
//     Seller.associate = (models) => {
//       Seller.hasMany(models.Orders,
//         { foreignKey: 'seller', as: 'orders' });
//     };
  
//     return Seller;
//   };