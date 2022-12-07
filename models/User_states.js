const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class User_states extends Model { }

User_states.init(
    // define columns
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        users_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        states_lived: {
            type: DataTypes.CHAR,
            allowNull: false
        },
        states_visited: {
            type: DataTypes.CHAR,
            allowNull: false
        },
        states_tovisit: {
            type: DataTypes.CHAR,
            allowNull: false
        },
        deleted_flag: {
            type: DataTypes.DATE,
            allowNull: true
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user_states',
    }
);

module.exports = User_states;
