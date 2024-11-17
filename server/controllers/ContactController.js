const Contact = require('../models/Contact'); 

// Get all contacts
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json({ success: true, contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch contacts', error: error.message });
  }
};

// Add a new contact
const addContact = async (req, res) => {
  console.log("in the addContact server func");
  console.log(req.body);
  const { firstName, lastName, email, phoneNumber, jobTitle, company } = req.body;

  if (!firstName || !lastName || !email || !phoneNumber || !jobTitle || !company) {
    return res.status(400).json({ success: false, message: 'All fields are required!' });
  }

  try {
    const newContact = new Contact({ firstName, lastName, email, phone: phoneNumber, jobTitle, company });
    await newContact.save();
    res.status(201).json({ success: true, message: 'Contact added successfully!', contact: newContact });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to add contact', error: error.message });
  }
};

// Delete a contact
const deleteContact = async (req, res) => {
  const { id } = req.params;
  // console.log("in the delete contact server func ", id);

  try {

    const deletedContact = await Contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return res.status(404).json({ success: false, message: 'Contact not found!' });
    }

    res.status(200).json({ success: true, message: 'Contact deleted successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to delete contact', error: error.message });
  }
};

// Update a contact
const updateContact = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, phone, jobTitle, company } = req.body;
  // console.log(req.body);

  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      id,
      { firstName, lastName, email, phone, jobTitle, company },
      { new: true }
    );

    if (!updatedContact) {
      return res.status(404).json({ success: false, message: 'Contact not found!' });
    }
    // console.log(updatedContact)

    res.status(200).json({ success: true, message: 'Contact updated successfully!', updatedContact });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to update contact', error: error.message });
  }
};

module.exports = { getAllContacts, addContact, deleteContact, updateContact };
