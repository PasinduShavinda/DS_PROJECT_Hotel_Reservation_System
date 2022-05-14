const express =require('express');
const mongoose =require('mongoose')
const bodyParser=require('body-parser');
const cors = require('cors')
const app =express();

app.use(bodyParser.json());
app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
const PORT =8002;


const RoomRoutes = require('./routes/sug_room-reservations');
app.use(RoomRoutes); 


const DB_URL=`mongodb+srv://dsProj123:dsp2yAbc@dsprojectcluster.iiyxv.mongodb.net/DSDB?retryWrites=true&w=majority`;
mongoose.connect(DB_URL)
.then(()=>{
    console.log('DB connected')
    
})
.catch((err)=>console.log('DB connection error',err))

app.listen(PORT,()=>{

    console.log(`App is runnning on ${PORT}`);
});