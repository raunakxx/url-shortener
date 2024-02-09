// index.js

const express = require('express');
const shortid = require('shortid');
const { connectToMongoDB, insertUrlMapping, findUrlMapping } = require('./mongo');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Call the connectToMongoDB function to establish the connection
connectToMongoDB();

// Route to handle shortening URLs
app.post('/shorten', async (req, res) => {
    const { url } = req.body;
    const shortId = shortid.generate();

    try {
        await insertUrlMapping(shortId, url);
        
        res.json({ shortUrl: `http://localhost:${PORT}/${shortId}` });
    } catch (error) {
        console.error('Error shortening URL:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Route to handle redirecting shortened URLs
app.get('/:shortId', async (req, res) => {
    const { shortId } = req.params;

    try {
        const result = await findUrlMapping(shortId);
        
        if (result) {
            // Redirect to the original URL retrieved from the MongoDB document
            res.redirect(result.url);
        } else {
            // If the short URL is not found in the database, return a 404 response
            res.status(404).send('URL not found');
        }
    } catch (error) {
        // If an error occurs during the redirection process, return a 500 response
        console.error('Error redirecting URL:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
