// import models
const Users = require('./Users');
const State_lk = require('./State_lk');
const User_states = require('./User_states');

// Sequelize associations described below
// Users have one User_states
// Posts has many Comments

Users.hasMany(User_states, {
    foreignKey: 'users_id',
    onDelete: 'CASCADE',
});

User_states.belongsTo(Users);

module.exports = {
    Users,
    User_states,
    State_lk,
};
