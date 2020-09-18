const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//middlewares
app.use(cors());
app.use(bodyParser.json());
require('dotenv/config');

//Middlewares
// app.use('/post', () => {
//     console.log("This is middleware running");
// });

//import Routes
const postsRoute = require('./routes/post');
app.use('/post', postsRoute.router);

//Routes
app.get('/', (req, res) => {
    res.send('we are on home');
});

app.get('/post', (req, res) => {
    res.send('we are on school');
});

//connect to DB
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true} ,() => console.log('connected to DB'))

//How to we start listening to the server
app.listen(3000);