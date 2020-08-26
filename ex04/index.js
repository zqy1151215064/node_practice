const Sequelize = require('sequelize');
module.exports.initModel = async sequelize => {
  // 暗号：哈希算法
  const User = sequelize.define("user", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: Sequelize.STRING
  })
  const Product = sequelize.define("product", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
  })
  Product.belongsTo(User, {
    constraints: true,
    onDelete: 'CASCADE'
  })
  User.hasMany(Product)
  User.sync()
  return { User, Product }
} 
