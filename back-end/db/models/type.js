'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Media, { foreignKey: 'fk_type' });
      
    }
  }
  Type.init({
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
    tableName: 'type',
    modelName: 'Type',
  });
  return Type;
};