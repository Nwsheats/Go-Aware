const router = require('express').Router();
const userRoutes = require('./userRoutes');
const userStatesRoutes = require('./userStatesRoutes');

router.use('/users', userRoutes);
router.use('/userstates', userStatesRoutes);

module.exports = router;