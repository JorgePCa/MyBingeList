'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.UserMedia, { foreignKey: 'fk_user' });
    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING
    },
    mail: {
      allowNull: false,
      type: Sequelize.STRING
    },
    birth_date: {
      allowNull: false,
      type: Sequelize.DATE
    },
    password: {
      allowNull: false,
      type: Sequelize.STRING
    }
  }, {
    sequelize,
    tableName:'user',
    modelName: 'User',
  });
  return User;
};