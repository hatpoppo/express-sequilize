"use strict";
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    "Task",
    {
      title: DataTypes.STRING
    },
    {}
  );
  Task.associate = function(models) {
    // associations can be defined here
    Task.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKeh: {
        allowNull: false
      }
    });
  };
  return Task;
};
