const express = require('express');
const app = express();
const port = 3000;

require('dotenv/config');

const api = process.env.API_URL;

// Product Information
app.get(`${api}/products`, (req, res) => {
    // Retrieve product information
    const product = {
        id: 1,
        name: 'white oud',
        image: 'have to add url for this',
    };
    res.json(product);
});

app.listen(port, () => {
    console.log(api);
    console.log(`Server is running on port ${port}`);
});