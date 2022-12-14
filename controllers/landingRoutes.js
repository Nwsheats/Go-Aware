const router = require('express').Router();
const { Users } = require('../models');

router.get('/dashboard', async (req, res) => {
  userData = await Users.findAll()
  const users = userData.map((user) => user.get({ plain: true }));
  res.render('dashboard', {
      username: users,
      date: new Date(),
  });
});

router.get('/', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/dashboard');
      return;
    }

    res.render('login');
  });

router.get('/signup', (req, res) => {
  res.render('signup');
});


  
  module.exports = router;