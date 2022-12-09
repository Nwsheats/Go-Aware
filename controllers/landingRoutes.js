const router = require('express').Router();
const { Users } = require('../models');

router.get('/dashboard', async (req, res) => {
  userData = await Users.findAll()
  const users = userData.map((user) => user.get({ plain: true }));
  res.render('dashboard', {
      username: users
  });
});

router.get('/', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/dashboard');
      return;
    }

    res.render('login');
  });


  
  module.exports = router;