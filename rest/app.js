const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");

//express app
const app = express();

// json body parser
app.use(bodyParser.json());

// use cors to allow origins and headers
app.use(cors());

//allow only json
const jsonCheck = (req, res, next) => {
    if (req.method === 'POST' && req.headers['content-type'] !== 'application/json') {
        res.status(400).send({
            message: "Only JSON input allowed",
        });
    } else {
        next();
    }
};

app.use(jsonCheck);

const creditCardRoutes = require('./routes/credit-card');

//register credit card routes
app.use('/credit_card', creditCardRoutes);

//404 Error handling
app.use((req, res) => {
    return res.status(404).send({message: 'Not Found'});

});

//500 Error handling
app.use(function (err, req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.status(err.status || 500).send({
        message: err.message,
    });
});

const PORT = 3001;
// Run app on the specified port
app.listen(PORT, () => {
    console.log(`REST API service is started on port ${PORT}`);
});

module.exports = app;
