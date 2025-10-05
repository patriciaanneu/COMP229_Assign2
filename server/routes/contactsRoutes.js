import express from 'express';
import {
    getAllContacts,
    getContactsByID,
    createContacts,
    updateContacts,
    removeContactsByID,
    removeAllContacts
} from '../controllers/contactsController.js';

const router = express.Router();

//CRUD routes for contacts
router.get('/', getAllContacts); //get all contacts
router.get('/:id', getContactsByID); //get contacts by id
router.post('/', createContacts); //add new contact
router.put('/:id', updateContacts);//update contact by id
router.delete('/:id', removeContactsByID);//remove contact by id
router.delete('/', removeAllContacts);//remove all contacts

export default router;