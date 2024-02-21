const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

// Middleware to parse JSON in the request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

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
    res.send(product);
});

// Product Information
app.post(`${api}/products`, (req, res) => {
    // Retrieve product information
    const newProduct = req.body;
    console.log(newProduct);
    res.send(newProduct);  // Sending the new product details as a response
});


mongoose.connect(process.env.CONNECT_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'ad-scents'
  
 })
.then(()=>{
    console.log('Database connection is ready...')
})
.catch((err)=> {
    console.log(err);
})

app.listen(port, () => {
    console.log(api);
    console.log(`Server is running on port ${port}`);
});
