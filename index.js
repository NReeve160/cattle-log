require('dotenv').config(); //get information from .env file

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

const port = process.env.PORT || 3000;
console.log(process.env.PORT);

const routes = require('./routes/main');
const passwordRoutes = require('./routes/password');

// update express settings
app.use(bodyParser.urlencoded({ extended: false})); // parse applicated urlencoded data
app.use(bodyParser.json()); // parse application json data
app.use(cookieParser());
app.use(cors({ credentials: true, origin: process.env.CORS_ORIGIN }));

// App Routes
app.use('/', routes);
app.use('/', passwordRoutes);

app.get('/status', (request, response) => {
    response.json({message: 'Active', status: 200 });
});


// app request accessible through browser
app.get('/', (request, response) => {
    response.status(200).send("Hello World");
});


//Error Handling

// catch all other routes
app.use((request, response) => {
    response.status(404).json({message: '404 - Not Found', status: 404});
});

// handle errors
app.use((error, request, response, next) => {
    console.log(error);
    response.status(error.status || 500).json({message: 'error: error.message', status: 404});
});



// run local port on port 3000
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});