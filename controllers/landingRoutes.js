const router = require('express').Router();
const { Users, User_states } = require('../models');
const authorize = require('../utils/auth');

// route to get and render the dashboard
router.get('/dashboard', authorize, async (req, res) => {
  userData = await Users.findAll()
  const users = userData.map((user) => user.get({ plain: true }));
  res.render('dashboard', {
      username: users,
      date: new Date(),
  });
});

// route to get all the userstate data
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

// route to login if not logged in and route to dashboard if logged in
router.get('/', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('dashboard');
      return;
    }

    res.render('login');
  });

// route to make the login page render the login page
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('dashboard');
    return;
  }

  res.render('login')
})


// route to render signup page
router.get('/signup', (req, res) => {
  res.render('signup');
});


  
module.exports = router;