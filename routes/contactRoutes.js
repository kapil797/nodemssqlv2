const express = require("express");
const router = express.Router();
const {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
} = require("../controllers/contactController");




// router.route('/').get(getContacts);
// router.route('/').post(createContact);

//can save some lines by changing to this.

router.route('/').get(getContacts).post(createContact);

// router.route('/:id').get(getContact);
// router.route('/:id').put(updateContact);
// router.route('/:id').delete(deleteContact);

//can save some lines by changing to this.
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;