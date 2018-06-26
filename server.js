const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// MONGOOSE CONNECT
mongoose.connect('mongodb://localhost/userapi');
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('err', err => console.log(`Database Connection Faild ${err}`));
db.once('open', () =>  console.log('Database Connected'));


// IMPORTING ROUTE
const userRoute = require('./api/route/userRoute');

// PORT
const PORT = process.env.PORT || 3000;



// MIDDLEwARE

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/users', userRoute);




// ROOT ROUTE
app.get('/', (req, res) => {
    res.json({
        message: 'Everything is fine!'
    });
});



    

app.listen(PORT, () => {
    console.log('im liseting on port '+ PORT);
});


