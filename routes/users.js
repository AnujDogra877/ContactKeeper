const express = require('express');

const User = require('../model/user');
const { body, validationResult, check } = require('express-validator');

const router = express.Router();

/***
 * @route POST api/users
 * @description Register a User
 * @access Public
 */
router.post('/', [
    check('name','Please Add Name').not().isEmpty(),
    check('email','Please Enter a vslid Email').isEmail(),
    check('password', "Please Enter a password with 6 or more characters").isLength({ min: 5 })
],(req, res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    res.send("Passed");
    // res.send(req.body);
});

module.exports = router;