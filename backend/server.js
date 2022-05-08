const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// import routes 
const taxiRouts = require('./routes/shv_taxi_route'); 

// Middlewares
app.use(bodyParser.json());
app.use(taxiRouts);

const PORT = 8001;

const DB_URL = 'mongodb+srv://dsProj123:dsp2yAbc@dsprojectcluster.iiyxv.mongodb.net/DSDB?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
.then(()=>{
    console.log('Database Connected');
})
.catch((err) => console.log('DB connection error !!', err));

app.listen(PORT, ()=>{

    console.log(`App is running on ${PORT}`);
}); 