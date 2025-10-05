import mongoose from 'mongoose';

//model for contacts
const contactsSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true },
    lastName: {
        type: String,
        required: true },
    email: {
        type: String,
        required: true }
});

const Contact = mongoose.model('Contact', contactsSchema);
export default Contact;