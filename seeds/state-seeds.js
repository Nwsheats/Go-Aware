const { State_lk } = require('../models');

const state_lkData = [
    {
        state_name: 'Alabama',
        state_code: 'AL',
    },
    {
        state_name: 'Alaska',
        state_code: 'AK',
    },
    {
        state_name: 'Arizona',
        state_code: 'AZ',
    },
    {
        state_name: 'Arkansas',
        state_code: 'AR',
    },
    {
        state_name: 'California',
        state_code: 'CA',
    },
];

const seedState_lk = () => State_lk.bulkCreate(state_lkData);

module.exports = seedState_lk;