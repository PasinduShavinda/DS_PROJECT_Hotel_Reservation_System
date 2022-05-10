import React, { Component } from 'react'
import Shv_Taxi_NavBar from '../shv_NavBars/shv_Taxi_NavBar';

export default class Shv_Taxi_Reservations_Home_Page extends Component {
  render() {
    return (
      <div>
       <Shv_Taxi_NavBar/>
       <center>
          
          <a href = '/TaxiAdminHome'><button type="button" class="btn btn-primary btn-lg btn-block">Taxi Admin Home Page</button></a><br/><br/>
          
          <a href = '/TaxiAdminClient'><button type="button" class="btn btn-primary btn-lg btn-block">Taxi Client Home Page</button></a><br/><br/>

          <a href = '/AdminTaxiReport'><button type="button" class="btn btn-primary btn-lg btn-block">Admin Taxi Reservation Report</button></a><br/><br/>

          </center>
      </div>
    )
  }
}
