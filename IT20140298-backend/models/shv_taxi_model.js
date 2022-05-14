const mongoose = require('mongoose');

const taxiSchema = new mongoose.Schema({

    fistName:{
        type:String,
        required:true
    },

    lastName:{
        type:String,
        required:true
    },

    mobileNumber:{
        type:String,
        required:true
    },

    nic:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    typeoftaxi:{
        type:String,
        required:true
    },

    condition:{
        type:String,
        required:true
    },

    bookingDate:{
        type:String,
        required:true
    },

    bookingTime:{
        type:String,
        required:true
    },

    numberOfPassengers:{
        type:String,
        required:true
    },

    pickupAddress :{
        type:String,
        required:true
    },

    dropOffAddress:{
        type:String,
        required:true
    }
},
  {
    timestamps: true
  }
);

module.exports = mongoose.model('taxibooking', taxiSchema);