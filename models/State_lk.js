// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// import our database connection from connection.js
const sequelize = require('../config/connection.js');

// Initialize State_lk model (table) by extending off Sequelize's Model class
class State_lk extends Model { }

// set up fields and rules for State_lk model
State_lk.init(
    // define columns
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        state_name: {
            type: DataTypes.CHAR,
            allowNull: false
        },
        state_code: {
            type: DataTypes.CHAR,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'state_lk',
    }
);

module.exports = State_lk;
