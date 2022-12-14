const router = require('express').Router();
const { Users, User_states } = require('../models');
const authorize = require('../utils/auth');

router.get('/dashboard', authorize, async (req, res) => {
  userData = await Users.findAll()
  const users = userData.map((user) => user.get({ plain: true }));
  res.render('dashboard', {
      username: users,
      date: new Date(),
  });
});

router.get('/dashboard', authorize, async (req, res) => {
  const userStateData = await User_states.findAll({
    where: { id: req.params.users_id },
    include: [Users]
  })
    const userStates = userStateData.map((state) => state.get({ plain: true }))
    res.render('dashboard', {
      userState: userStates,
      date: new Date()
    });
  });


router.get('/', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('dashboard');
      return;
    }

    res.render('login');
  });


router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('dashboard');
    return;
  }

  res.render('login')
})


router.get('/signup', (req, res) => {
  res.render('signup');
});


  
module.exports = router;