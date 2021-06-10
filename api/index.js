const router = require('express').Router();
const account = require('./account');
const secretData = require('./secret');
const { ensureAuthenticated } = require('../auth');

router.use('/account', account);
router.use('/secretdata', ensureAuthenticated, secretData);

module.exports = router;