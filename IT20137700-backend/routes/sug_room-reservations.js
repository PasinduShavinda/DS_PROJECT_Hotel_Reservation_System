const express = require('express');
const Reservations =require('../models/sug_room-reservations');

const router=express.Router();

router.post('/room-reservation/save',(req,res)=>{

    let newReservation =new Reservations(req.body);

    newReservation.save((err)=>{
if(err){
    return res.status(400).json({
        error:err
    });
}
return res.status(200).json({
    success:"details saved succuessfully"
});

    });
});


//get month

router.get("/room-reservation",(req,res) =>{
    Reservations.find().exec((err,reservations)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingReservation:reservations
        });
  
        
    });  

});


//update 
router.put('/room-reservation/update/:id',(req,res)=>{
    Reservations.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,reservation)=>{
        if(err){
            return res.status(400).json({error:err});
        }
        return res.status(200).json({
            success:"Udated Successfully"
        });
        }
    );
});

//delete month

router.delete('/room-reservation/delete/:id',(req,res)=>{
    Reservations.findByIdAndRemove(req.params.id).exec((err,deletereservation)=>{

   if(err)return res.status(400).json({
       message:"Delete Unsuccsrssfull",err

   });

   return res.json({
    message:"Delete scccessfull",deletereservation

   });


    })



})


router.get("/room-reservation/:id",(req,res)=>{

let reservationId=req.params.id;

Reservations.findById(reservationId,(err,reservation)=>{

    if(err){

        return res.status(400).json({success:false,err});
    }

    return res.status(200).json({
        success:true,
        reservation
    })
})

})



router.get("/",(req,res) =>{
    Reservations.find().sort({$natural: -1 }).limit(1).exec((err,reservations)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingReservations:reservations
        });
  
        
    });  

});



    




module.exports=router;