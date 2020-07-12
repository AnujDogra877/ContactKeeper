const express = require('express');
const bcrypt = require('bcryptjs');

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
    check('email','Please Enter a valid Email').isEmail(),
    check('password', "Please Enter a password with 6 or more characters").isLength({ min: 5 })
],async (req, res) => { 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const {name, email, password } = req.body;
    try {
        let user = await User.findOne({email});
        if(user){
            return res.status(400).json({msg:"User Already Exists"});
        }
        user = new User({
            name, email, password
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password,salt);
        await user.save();
        res.send("User Saved Successfully");
    } catch (err) {
        console.log(err.message);
        res.status(500).json({msg:"Server Error"});
    }
});

module.exports = router;