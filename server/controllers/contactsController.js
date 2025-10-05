import Contact from '../models/contactsModel.js';


//GET get all contacts
export const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json({ success: true, data: contacts });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    } 
};

//GET get contacts by id
export const getContactsByID = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ success: false, message: 'Contact not found' });
        }
        res.status(200).json({ success: true, data: contact });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

//POST add new contacts
export const createContacts = async (req, res) => {
    try {
        console.log('POST request received:', req.body);
        const { firstName, lastName, email } = req.body;
        const newContact = new Contact({ firstName, lastName, email });
        await newContact.save();
        console.log('Contact saved:', newContact);
        res.status(201).json({ success: true, data: newContact });
    } catch (error) {
        console.log('Error creating contact:', error.message);
        res.status(400).json({ success: false, message: error.message });
    }
};

//PUT update contact by id
export const updateContacts = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!contact) {
            return res.status(404).json({ success: false, message: 'Contact not found '});
        }
        res.status(200).json({ success: true, data: contact });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//DELETE remove contact by id
export const removeContactsByID = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        if(!contact) {
            return res.status(404).json({ success: false, message: 'Contact not found' });
        }
        res.status(200).json({ success: true, message: 'Contact deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

//DELETE remove all contacts
export const removeAllContacts = async (req, res) => {
    try {
        const result = await Contact.deleteMany({});
        res.status(200).json({
            success: true,
            message: `Successfully deleted ${result.deletedCount} contacts`
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
