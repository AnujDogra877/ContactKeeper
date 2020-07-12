const express = require('express');

const router = express.Router();

/***
 * @route GET api/contacts
 * @description Get All COntacts
 * @access Private
 */
router.get('/', (req, res) =>{
    res.send('Get All Contacts');
});

/***
 * @route POST api/contacts
 * @description Get All COntacts
 * @access Private
 */
router.post('/', (req, res) =>{
    res.send('Add New Contact');
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