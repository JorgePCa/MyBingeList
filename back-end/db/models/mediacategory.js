'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MediaCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Media, { foreignKey: 'fk_media'} )
      this.belongsTo(models.Category, { foreignKey: 'fk_category'} )
    }
  }
  MediaCategory.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    fk_media: {
      allowNull: false,
      references: {
        model: 'media',
        key: 'id'
      },
      type: DataTypes.INTEGER
    },
    fk_category: {
      allowNull: false,
      references: {
        model: 'category',
        key: 'id'
      },
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    tableName: 'mediaCategory',
    modelName: 'MediaCategory',
  });
  return MediaCategory;
};