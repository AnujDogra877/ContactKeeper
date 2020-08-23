const express = require('express');

const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');


const { body, validationResult, check } = require('express-validator');

const User = require('../model/user');

/***
 * @route GET api/auth
 * @description Get Login User
 * @access Public
 */

router.get('/', auth, async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password');
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

/***
 * @route POST api/auth
 * @description Auth user & get Token
 * @access Public
 */
router.post('/',[
        check('email',"Please Enter a valid email!").isEmail(),
        check('password',"Password is required!").notEmpty()
    ],
    async (req, res) => { 
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        const { email, password } = req.body;
        try 
        {
            let user = await User.findOne({email});
            if(!user){
                return res.status(400).json({msg:"Invalid Email Id!"});
            }
            const isMatch = await bcrypt.compare(password,user.password);
            
            if(!isMatch){
                return res.status(400).json({msg:"Invalid Password!"});
            }

            const payload = {
                user:{
                    id:user.id
                }
            };
            jwt.sign(payload,config.JWTSecret,{
                expiresIn: 360000
            },(err,token)=>{
                if(err) throw err;
                res.json({token});
            });

        } catch (error) {
            console.error(error);
            console.log("Server Error !")
        }
    }
);

module.exports = router;