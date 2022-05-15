import React, { Component } from 'react'


export default class TaxiHomeAdmin extends Component {
    render() {
        return (
            <div>
      
            <br/><br/>
            <div>
            <header>
    
            <div className="p-5 text-center bg-image" style={{backgroundImage: 'url("https://wallpaperaccess.com/full/781957.jpg")', backgroundSize:'cover', height:"750px"}}>


                <div className="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)' , marginTop:"10px"}}>
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white"><br/>
                    <h1 className="mb-3">Hilton</h1>
                    <h4 className="mb-3">Hotel Reservation System</h4><br/>
                    <a className="btn btn-outline-light btn-lg" href="/AdminTaxiReport" role="button">Manage Taxi Reservation</a>
                    <br/><br/><br/>
                    </div>

                </div>
                </div>
            </div>
            </header>

            <br/><br/><br/><br/>

            </div>
        </div>

        )
    }
}



