'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StatusW extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.UserMedia, { foreignKey: 'fk_statusW' });
    }
  }
  StatusW.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    definition: {
      allowNull: false,
      type: Sequelize.STRING
    },
    description: {
      allowNull: false,
      type: Sequelize.STRING
    }
  }, {
    sequelize,
    tableName: 'statusW',
    modelName: 'StatusW',
  });
  return StatusW;
};