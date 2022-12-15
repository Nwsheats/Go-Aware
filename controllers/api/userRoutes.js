const router = require('express').Router();
const { Users, User_states } = require('../../models');
const authorize = require('../../utils/auth');

// users get all route
router.get('/', authorize, async (req, res) => {
    try {
        const userData = await Users.findAll({
            include: [User_states] 
        });
        res.status(200).json(userData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// users get by id route
router.get('/:id', authorize, async (req, res) => {
    try {
        const oneUser = await Users.findOne({
            where: {id: req.params.id},
            include: [User_states] 
        });
        res.status(200).json(oneUser);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// create new user route
router.post('/', async (req, res) => {
    try {
        const newUser = await Users.create(req.body);
        req.session.save(() => {
            req.session.user_id = newUser.id;
            req.session.logged_in = true
        })
        res.status(200).json(newUser);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// login creation route
router.post('/login', async (req, res) => {
    try {
    const userData = await Users.findOne({ where: { email: req.body.email } });

    if (!userData) {
        res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
        return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
        res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
        return;
    }

    req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
    });

    } catch (err) {
    res.status(400).json(err);
    }
});

// logout route that destroys the session
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
    req.session.destroy(() => {
        res.status(204).end();
    });
    } else {
    res.status(404).end();
    }
});




module.exports = router;