const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

// create our Employee model
class Employees extends Model {}
  
  // create fields/columns for Employee model
  Employees.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      phoneNum: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      employeeID: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      department: {
        type: DataTypes.STRING,
      },
      managerFirst: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      managerLast: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      salary: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: "employee",
    }
  );
  
  module.exports = Employees;