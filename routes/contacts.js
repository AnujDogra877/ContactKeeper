const express = require('express');

const router = express.Router();

const User = require('../model/user');
const { body, validationResult, check } = require('express-validator');
const Contact = require('../model/Contact');
const auth = require('../middleware/auth');

/***
 * @route GET api/contacts
 * @description Get All COntacts
 * @access Private
 */
router.get('/', auth,  async (req, res)  =>{
    try {
        const contacts = await Contact.find({user:req.user.id}).sort({date: -1});
        res.json(contacts);
    } catch (er) {
        console.error(er);
        res.status(500).send('Server Error');
    }
});

/***
 * @route POST api/contacts
 * @description Get All COntacts
 * @access Private
 */
router.post('/', [ auth,[
    check('name',"Username is Required").not().isEmpty()
]], async (req, res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
    }

    const {name, email, phone, type} = req.body;
    
    try {
        const newContact = new Contact({
            name, 
            email, 
            phone, 
            type, 
            user : req.user.id
        });
        const contact = await newContact.save();
        res.json(contact);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

/***
 * @route PUT api/contacts/:id
 * @description Update contact
 * @access Private
 */
router.put('/:id', (req, res) =>{
    res.send('Add New Contact');
});

/***
 * @route DELETE api/contacts/:id
 * @description Update contact
 * @access Private
 */
router.delete('/:id', (req, res) =>{
    res.send('Delete a Contact');
});


module.exports = router;