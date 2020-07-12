const express = require('express');

const router = express.Router();

/***
 * @route GET api/auth
 * @description Get Login User
 * @access Public
 */
router.get('/', (req, res) =>{
    res.send('Get Log in User');
});

/***
 * @route POST api/auth
 * @description Auth user & get Token
 * @access Public
 */
router.post('/', (req, res) =>{
    res.send('User Log in');
});

module.exports = router;