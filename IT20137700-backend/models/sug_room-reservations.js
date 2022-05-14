const mongoose= require('mongoose');

const roomReservationSchema =new mongoose.Schema({

 Name:{
    type:String,
    required:true,
 },
 
 email :{
    type:String,
    required:true,
 },
 Checking:{

    type:Date,
    required:true,
},

Checkout:{
    type:Date,
    required:true,
},

NoOfDates:{
    type:Number,
   
},


NoOfSuiteRooms:{
    type:Number,
    required:true,
},
NoOfDoubleRooms:{
    type:Number,
    required:true,
},
NoOfFamilyRooms:{
    type:Number,
    required:true,
},

NoOfAdults:{
    type:Number,
    required:true,
},
NoOfChilderen:{
    type:Number,
    required:true,
},


Board_Type:{
    type:String,
   
    
},


});


module.exports=mongoose.model('room',roomReservationSchema)