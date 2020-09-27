const express = require('express');
const app = express();
const toonifyRoute = require('./api/routes/toonify')

app.use('/toonifyImage', toonifyRoute)


app.use((req, res, next) => {
    res.status(200).json({

        message: 'It works!'
    });
    
});

module.exports = app;