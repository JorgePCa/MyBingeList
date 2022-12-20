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
      type: Sequelize.INTEGER
    },
    fk_type: {
      allowNull: false,
      references: {
        model: 'type',
        key: 'id'
      },
      type: Sequelize.INTEGER
    },
    title: {
      allowNull: false,
      type: Sequelize.STRING
    },
    season_volume: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    year: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    score: {
      allowNull: false,
      type: Sequelize.REAL
    }
  }, {
    sequelize,
    tableName: 'media',
    modelName: 'Media',
    underscored: true,
  });
  return Media;
};