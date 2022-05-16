const express = require('express');
const Event = require('../models/th_eventB_model');

const router = express.Router();

//Save

router.post('/postEvent/save', (req, res) =>{

    let newEvent = new Event(req.body);

    newEvent.save((err) =>{

            if(err){
                return res.status(400).json({
                    error:err
                });
            }

            return res.status(200).json({
                success:"Your Reservation has been done Successfully"
            });
    });
});


//Retrieve 

router.get('/postEvent', (req,res) =>{

    Event.find().exec((err,EventReservation) =>{

        if(err){
            return res.status(400).json({

                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingEvent:EventReservation
        });
    });

});

//Get specific event

router.get("/postEvent/:id",(req,res) =>{

    let EventId = req.params.id;

    Event.findById(EventId,(err,EventReservation)=>{

        if(err){
            return res.status(400).json({success:false, err});
        
        }
        return res.status(200).json({
            success:true,
            EventReservation
        });
    });
});

//Update 

router.put('/postEvent/update/:id', (req, res)=>{

    Event.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,event) => {
            if(err){
                return res.status(400).json({error:err});
            }
            
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
})


//Delete 

router.delete('/postEvent/delete/:id', (req,res) =>{

    Event.findByIdAndRemove(req.params.id).exec((err, deletedEvent) =>{

        if(err) return res.status(400).json({
            message: "Delete Unsuccessfully", err
        });
        return res.json({

            message:"Delete successfully", deletedEvent
        });
    });
});


module.exports = router;