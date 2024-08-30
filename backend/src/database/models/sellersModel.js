module.exports = (sequelize, DataTypes) => {
    const Seller = sequelize.define('Seller', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'SELLERS',
      underscored: true,
    });
  
    Seller.associate = (models) => {
      Seller.hasMany(models.Orders,
        { foreignKey: 'sellerId', as: 'orders' });
    };
  
    return Seller;
  };