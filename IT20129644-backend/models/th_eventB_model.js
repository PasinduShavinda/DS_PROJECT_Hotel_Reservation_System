const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    nic:{
        type:String,
        required:true
    },

    mobileNumber:{
        type:String,
        required:true
    },

    bookingDate:{
        type:Date,
        required:true
    },

    bookingTime:{
        type:String,
        required:true
    },

    numberOfGuests:{
        type:Number,
        required:true
    },

    eventType:{
        type:String,
      
    },

    eventHall:{
        type:String,
        
    }

});

module.exports = mongoose.model('EventBooking', eventSchema);