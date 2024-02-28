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
const productsRouter  = require('./routers/products');

//Routers
app.use('${api}/products', productsRouter);

const Product = require('./models/product');
// Product Information


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