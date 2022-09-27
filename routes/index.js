const router = require('express').Router();
const apiRoutes = require('./Api');

router.use('/Api', apiRoutes);

router.use((req, res) => {
    return res.send('Wrong route!');
  });
  
  module.exports = router;
  