Node.js Link Shortener

The Node.js Link Shortener is a web application that allows users to generate shortened URLs from long ones. It provides a simple and efficient solution for sharing links while maintaining data integrity and security. This project is built with Node.js, Express.js, MongoDB, and the shortid library.
Features

    Shorten long URLs to create unique, easy-to-share links.
    Store URL mappings in a MongoDB database for persistence.
    Redirect users from shortened URLs to the original long URLs.
    Simple and intuitive API for URL shortening.

Prerequisites

Before running the application, ensure you have the following prerequisites installed:

    Node.js and npm (Node Package Manager)
    MongoDB (Make sure MongoDB is running on your system)

Installation

    Clone the repository:

    bash

git clone https://github.com/your-username/url-shortener.git

Navigate to the project directory:

bash

cd url-shortener

Install dependencies:

bash

    npm install

Configuration

    Set up MongoDB:
        Make sure MongoDB is running on your local machine.
        Update the MongoDB connection URI in the mongo.js file if necessary.

    Start the server:

    bash

    npm start

Usage
Shortening URLs

To shorten a URL, send a POST request to the /shorten endpoint with a JSON body containing the original URL. For example:

bash

curl -X POST -H "Content-Type: application/json" -d '{"url": "https://example.com"}' http://localhost:3000/shorten

Accessing Shortened URLs

Shortened URLs can be accessed by appending the short code to the base URL. For example:

arduino

http://localhost:3000/{shortCode}

Redirecting Shortened URLs

When a user accesses a shortened URL, the application redirects them to the original long URL.
Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.
License

This project is licensed under the MIT License.
Acknowledgements

    Thanks to the creators of Node.js, Express.js, MongoDB, and shortid for their excellent tools and libraries.
