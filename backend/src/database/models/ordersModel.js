module.exports = (sequelize, DataTypes) => {
    const Orders = sequelize.define('Orders', {
      orderId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      country: DataTypes.STRING,
      product: DataTypes.STRING,
      price: DataTypes.INTEGER,
      sellerId: { type: DataTypes.INTEGER, foreignKey: true },
    },
    {
      timestamps: false,
      tableName: 'ORDERS',
      underscored: true,
    });
  
    Orders.associate = (models) => {
      // define o tipo de relacionamento
      Orders.belongsTo(models.Sellers,
      // define qual a foreign key a ser criada
        { foreignKey: 'orderId', as: 'Sellers' });
    };
  
    return Orders;
  };