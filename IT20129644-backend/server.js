const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// import routes 
const eventRouts = require('./routes/th_eventB_route'); 

// Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(eventRouts);

const PORT = 8004;

const DB_URL = 'mongodb+srv://dsProj123:dsp2yAbc@dsprojectcluster.iiyxv.mongodb.net/DSDB?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
.then(()=>{
    console.log('Database Connected');
})
.catch((err) => console.log('DB connection error !!', err));

app.listen(PORT, ()=>{

    console.log(`App is running on ${PORT}`);
}); 