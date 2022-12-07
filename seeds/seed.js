const seedUsers = require('./users-seeds');
const seedUser_states = require('./user_states-seeds');
const seedState_lk = require('./state-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
    await seedUser_states();
    console.log('\n----- USER_STATES SEEDED -----\n');
    await seedState_lk();
    console.log('\n----- STATES SEEDED -----\n');


    process.exit(0);
};

seedAll();