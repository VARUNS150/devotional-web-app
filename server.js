const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// MongoDB connection string
const dbURI = 'mongodb+srv://varunbhati541:your_password@cluster0.uavdx.mongodb.net/devotional-app?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Backend server running');
});

// Importing Shloka model
const Shloka = require('./models/shloka');

// Route to add a shloka
app.post('/add-shloka', async (req, res) => {
    const { text, translationHindi, translationEnglish, audioUrl } = req.body;
    
    try {
        const newShloka = new Shloka({
            text,
            translationHindi,
            translationEnglish,
            audioUrl
        });

        await newShloka.save();
        res.status(201).send('Shloka added successfully!');
    } catch (err) {
        console.error('Error adding shloka:', err);
        res.status(500).send('Error adding shloka');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
