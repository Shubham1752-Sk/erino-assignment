const express = require('express');
const {
  getAllContacts,
  addContact,
  deleteContact,
  updateContact,
} = require('./controllers/ContactController');

const router = express.Router();

router.get('/get-all-contacts', getAllContacts); // GET all contacts
router.post('/add-contacts', addContact);        // POST a new contact
router.delete('/delete-contacts/:id', deleteContact); // DELETE a contact by ID
router.put('/update-contacts/:id', updateContact);    // PUT (update) a contact by ID

module.exports = router;
