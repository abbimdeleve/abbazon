module.exports = function(sequelize, DataTypes) {
    var Product = sequelize.define("Product", {
      // Giving the Product model a name of type STRING
      book_name: DataTypes.STRING,
      author_name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      stock_quantity: DataTypes.INTEGER,
      image: DataTypes.STRING
    });
  
    return Product;
  };
  