const router = require('express').Router();
const { Users, User_states } = require('../../models');
const authorize = require('../../utils/auth');

router.get('/:id', authorize, async (req, res) => {
    try {
        const userStateData = await User_states.findOne({
            where: {id: req.params.id},
            include: [Users] 
        });
        res.status(200).json(userStateData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});


router.post('/', async (req, res) => {
    try {
        const newState = await User_states.create({
            states_lived: req.body.stateLived,
            states_visited: req.body.statesVisited,
            states_tovisit: req.body.visitState,
            // fix users_id value below
            users_id: req.session.id
        });
        console.log(newState, "newstate")  
        res.status(200).json(newState);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;

