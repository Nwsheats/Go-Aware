const { Users } = require('../models');

const usersData = [
    {
        // username: 'a-money123',
        password: 'password123',
        first_name: 'Aaron',
        last_name: 'Money',
        email: 'a-money@yahoo.com'
    },
    {
        // username: 'b-money123',
        password: 'password123',
        first_name: 'Benjamin',
        last_name: 'Money',
        email: 'b-money@yahoo.com'
    },
    {
        // username: 'c-money123',
        password: 'password123',
        first_name: 'Conor',
        last_name: 'Money',
        email: 'c-money@yahoo.com'
    },
    {
        // username: 'd-money123',
        password: 'password123',
        first_name: 'Dwight',
        last_name: 'Money',
        email: 'd-money@yahoo.com'
    },
    {
        // username: 'e-money123',
        password: 'password123',
        first_name: 'Eric',
        last_name: 'Money',
        email: 'e-money@yahoo.com'
    }
];

const seedUsers = () => Users.bulkCreate(usersData);

module.exports = seedUsers;