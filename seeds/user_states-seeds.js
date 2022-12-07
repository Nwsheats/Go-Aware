const { User_states } = require('../models');

const user_statesData = [
    {
        users_id: 1,
        states_lived: 'MN',
        states_visited: 'IA, WI, MI, NY',
        states_tovisit: 'AL, AK, AZ, MN'
    },
    {
        users_id: 2,
        states_lived: 'WI',
        states_visited: 'CA, NV, WA, OR',
        states_tovisit: 'FL'
    },
    {
        users_id: 3,
        states_lived: 'MI',
        states_visited: 'IA, WI, MI, NY',
        states_tovisit: 'AL, AK, AZ, MN'
    },
    {
        users_id: 4,
        states_lived: 'TX',
        states_visited: 'IA, WI, MI, NY',
        states_tovisit: 'AL, AK, AZ, MN'
    },
    {
        users_id: 5,
        states_lived: 'NV, CA, UT',
        states_visited: 'IA, WI, MI, NY',
        states_tovisit: 'AL, AK, AZ, MN'
    }
];

const seedUser_states = () => User_states.bulkCreate(user_statesData);

module.exports = seedUser_states;