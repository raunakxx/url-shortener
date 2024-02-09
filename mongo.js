// mongo.js

const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://127.0.0.1:27017'; // Your MongoDB URL

// Create a new MongoClient
const client = new MongoClient(url);

// Function to connect to MongoDB
async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error; // Rethrow the error to handle it in the calling code
    }
}

// Function to insert a URL mapping into MongoDB
async function insertUrlMapping(shortId, url) {
    try {
        // Get the 'urls' collection from MongoDB
        const urlsCollection = client.db('urlShortener').collection('urls');
        
        // Insert the URL mapping into the collection
        await urlsCollection.insertOne({ shortId, url });
    } catch (error) {
        console.error('Error inserting URL mapping:', error);
        throw error; // Rethrow the error to handle it in the calling code
    }
}

// Function to find a URL mapping by shortId in MongoDB
async function findUrlMapping(shortId) {
    try {
        // Get the 'urls' collection from MongoDB
        const urlsCollection = client.db('urlShortener').collection('urls');
        
        // Find the URL mapping in the collection
        const result = await urlsCollection.findOne({ shortId });
        
        return result; // Return the entire document, including the URL field
    } catch (error) {
        console.error('Error finding URL mapping:', error);
        throw error; // Rethrow the error to handle it in the calling code
    }
}

// Export the functions for use in other modules
module.exports = {
    connectToMongoDB,
    insertUrlMapping,
    findUrlMapping
};
