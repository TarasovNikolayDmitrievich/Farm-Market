'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Avatar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.User_detail, {
        foreignKey: 'avatar_id',
      });
    }
  }
  Avatar.init({
    image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Avatar',
  });
  return Avatar;
};
