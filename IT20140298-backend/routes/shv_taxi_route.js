const express = require('express');
const Taxi = require('../models/shv_taxi_model');

const router = express.Router();

//Save

router.post('/postTaxi/save', (req, res) =>{

    let newTaxi = new Taxi(req.body);

    newTaxi.save((err) =>{

            if(err){
                return res.status(400).json({

                    error:err
                });
            }

            return res.status(200).json({

                success:"Taxi Reserved Successfully"
            });
    });
});


// Retrieve 

router.get('/postTaxi', (req,res) =>{

    Taxi.find().exec((err,taxi) =>{

        if(err){
            return res.status(400).json({

                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingtaxi:taxi
        });
    });

});

//get specific 

router.get("/postTaxi/:id",(req,res) =>{

    let TaxiId = req.params.id;

    Taxi.findById(TaxiId,(err,taxi)=>{

        if(err){
            return res.status(400).json({success:false, err});
        
        }
        return res.status(200).json({
            success:true,
            taxi
        });
    });
});

// update 

router.put('/postTaxi/update/:id', (req, res)=>{

    Taxi.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, taxi) => {
            if(err){
                return res.status(400).json({error:err});
            }
            
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
})


// Delete 

router.delete('/postTaxi/delete/:id', (req,res) =>{

    Taxi.findByIdAndRemove(req.params.id).exec((err, deletedtaxi) =>{

        if(err) return res.status(400).json({
            message: "Delete Unsuccessfully", err
        });
        return res.json({

            message:"Deleted successfull", deletedtaxi
        });
    });
});



module.exports = router;