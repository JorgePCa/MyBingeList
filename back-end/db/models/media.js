'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Media extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Type, { foreignKey: 'fk_type' });
      this.hasOne(models.MediaCategory, { foreignKey: 'fk_media' });
    }
  }
  Media.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    fk_type: {
      allowNull: false,
      references: {
        model: 'type',
        key: 'id'
      },
      type: DataTypes.INTEGER
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    season_volume: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    year: {
      allowNull: false,
      type: DataTypes.STRING
    },
    score: {
      allowNull: false,
      type: DataTypes.REAL
    }
  }, {
    sequelize,
    tableName: 'media',
    modelName: 'Media',
    underscored: true,
  });
  return Media;
};