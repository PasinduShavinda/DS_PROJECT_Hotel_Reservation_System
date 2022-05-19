import React, { Component } from 'react'

export default class admindashbord extends Component {
    render() {
        return (

          <div className='sugcontent3'>
              <div class="container-fluid">
                   <section id="tmAppFeatures">
            <div class="row">
                <header class="col-12 text-center text-white tm-bg-black-transparent p-5 tm-app-header">
                    <h2 class="text-uppercase mb-3 tm-app-feature-header">Admin Dashboard</h2>
                  
                </header>
            </div>

            <div class="row">
                <div class="col-lg-6">
                <a href='/Allreservations' style={{textDecoration:'none' ,color:'black'}}>
                    <div class="tm-bg-white-transparent tm-app-feature-box">
                        <div class="tm-app-feature-icon-container">
                            <i class="fas fa-3x fa fa-bed tm-app-feature-icon"></i>
                        </div>
                        <div class="tm-app-feature-description-box">
                            <h4 class="mb-4 tm-app-feature-title" style={{fontSize:'20px'}}>Room Reservation Management</h4>
                            <p class="tm-app-feature-description">Get the All  Room Reservation details and Update delete the reservation.</p>
                        </div>
                    </div>
                    </a>
                </div>
                
               
                <div class="col-lg-6">
                <a href='/AllEventReservations' style={{textDecoration:'none' ,color:'black'}}>
                    <div class="tm-bg-white-transparent tm-app-feature-box">
                        <div class="tm-app-feature-icon-container">
                            <i class="fas fa-3x fa fa-university tm-app-feature-icon"></i>
                        </div>
                        <div class="tm-app-feature-description-box">
                            <h3 class="mb-4 tm-app-feature-title" style={{fontSize:'20px'}}>Reception Hall Management</h3>
                            <p class="tm-app-feature-description">Get the All  Reseption hall reservation details and Update delete the reservations.</p>
                        </div>
                    </div>
                    </a>
                </div>
                

                <div class="col-lg-6">
                <a href='/TaxiAdminHome' style={{textDecoration:'none' ,color:'black'}}>
                    <div class="tm-bg-white-transparent tm-app-feature-box">
                        <div class="tm-app-feature-icon-container">
                            <i class="fas fa-3x fa fa-taxi tm-app-feature-icon"></i>
                        </div>
                        <div class="tm-app-feature-description-box">
                            <h3 class="mb-4 tm-app-feature-title" style={{fontSize:'20px'}}>Taxi Reservation Management</h3>
                            <p class="tm-app-feature-description"> Get all Taxi Booking datails and Update delete and View each Booking</p>
                        </div>
                    </div>
                    </a>
                </div>

                <div class="col-lg-6">
                <a href='/adminHome' style={{textDecoration:'none' ,color:'black'}}>
                    <div class="tm-bg-white-transparent tm-app-feature-box">
                        <div class="tm-app-feature-icon-container">
                            <i class="fas fa-3x fa fa-money tm-app-feature-icon"></i>
                        </div>
                        <div class="tm-app-feature-description-box">
                            <h3 class="mb-4 tm-app-feature-title" style={{fontSize:'20px'}}>Payment Management</h3>
                            <p class="tm-app-feature-description">view all the payment details done by customers and update and delete each payment details</p>
                        </div>
                    </div>
                    </a>
                </div>
               
            </div>
          
        </section>
        </div>
          </div>
        )
      }
    }