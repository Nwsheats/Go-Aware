const { Users } = require('../models');

const usersData = [
    {
        password: 'password123',
        first_name: 'Aaron',
        last_name: 'Money',
        email: 'a-money@yahoo.com'
    },
    {
        password: 'password123',
        first_name: 'Benjamin',
        last_name: 'Money',
        email: 'b-money@yahoo.com'
    },
    {
        password: 'password123',
        first_name: 'Conor',
        last_name: 'Money',
        email: 'c-money@yahoo.com'
    },
    {
        password: 'password123',
        first_name: 'Dwight',
        last_name: 'Money',
        email: 'd-money@yahoo.com'
    },
    {
        password: 'password123',
        first_name: 'Eric',
        last_name: 'Money',
        email: 'e-money@yahoo.com'
    }
];

const seedUsers = () => Users.bulkCreate(usersData);

module.exports = seedUsers;