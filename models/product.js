'use strict';

module.exports = (sequelize, DataTypes) => {
    var Product = sequelize.define('Product', {
        title: DataTypes.STRING
    }, {
        classMethods: {
            associate: function (models) {
            }
        }
    });
    
    return Product;
};