const router = require('express').Router();
const e = require('express');
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
    console.log(req.body)
    try {
        // const stateData = await User_states.findOne({ where: {id: req.params.id} });

        // if (stateData) {
        //     await User_states.update(req.body, {
        //         where: {id: stateData.id },
        //     })
        // } else {
            const newState = await User_states.create({
                states_lived: req.body.stateLived,
                states_visited: req.body.statesVisited,
                states_tovisit: req.body.visitState,
                // fix users_id value below
                users_id: 5
            });
            console.log(newState, "newstate")  
            res.status(200).json(newState);
        } catch (err) {
            res.status(400).json(err);
        }
        });
    //     const newState = await User_states.create({
    //         states_lived: req.body.stateLived,
    //         states_visited: req.body.statesVisited,
    //         states_tovisit: req.body.visitState,
    //         // fix users_id value below
    //         users_id: 5
    //     });
    //     console.log(newState, "newstate")  
    //     res.status(200).json(newState);
    // } catch (err) {
    //     res.status(400).json(err);
    // }


module.exports = router;

