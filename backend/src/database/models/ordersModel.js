module.exports = (sequelize, DataTypes) => {
    const Orders = sequelize.define('Orders', {
      orderId: { type: DataTypes.INTEGER, primaryKey: true },
      country: DataTypes.STRING,
      product: DataTypes.STRING,
      price: DataTypes.INTEGER,
      seller: { type: DataTypes.INTEGER, foreignKey: true },
    },
    {
      timestamps: false,
      tableName: 'ORDERS',
      underscored: true,
    });
  
    Orders.associate = (models) => {
      Orders.belongsTo(models.Sellers,
        { foreignKey: 'orderId', as: 'Sellers' });
    };
  
    return Orders;
  };