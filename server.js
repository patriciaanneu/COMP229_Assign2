import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { connectDB } from './server/config/db.js';

import contactsRoutes from './server/routes/contactsRoutes.js';
import usersRoutes from './server/routes/usersRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());

//for testing
app.get('/', (req, res) => {
    res.json('Welcome to My Portfolio application');
});

app.use('/api/contacts', contactsRoutes);
app.use('/api/users', usersRoutes);


//Connect to mongodb
// console.log(process.env.MONGODB_URI);

app.listen(PORT, () => {
  connectDB();
  console.log('Server started on PORT: ', PORT);
});
