import mongoose from 'mongoose';

//model for users
const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    }
}, { timestamps: true } //createdAt, updatedAt
);

const User = mongoose.model('User', usersSchema);
export default User;