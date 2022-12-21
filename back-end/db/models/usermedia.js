'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserMedia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'fk_user' });
      this.belongsTo(models.Media, { foreignKey: 'fk_media' });
      this.belongsTo(models.StatusW, { foreignKey: 'fk_status' });
    }
  }
  UserMedia.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    fk_user: {
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      },
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
    fk_status: {
      allowNull: false,
      references: {
        model: 'statusW',
        key: 'id'
      },
      type: DataTypes.INTEGER
    },
    active: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize,
    underscored: true,
    tableName: 'userMedia',
    modelName: 'UserMedia',
  });
  return UserMedia;
};