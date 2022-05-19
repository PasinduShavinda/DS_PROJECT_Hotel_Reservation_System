import React, { Component } from 'react';
import axios from 'axios';
import "./styles/th_style.css";



export default class SpecialActivities extends Component{

  render() {
    
    return(
        <div>
      
        <div id="headerpart4">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-lg-offset-3">
                        
                        <h1>Special Activities</h1>
                        
                    </div>
                </div>
            </div> 
        </div>

        <br></br>
        <br></br>

        <div class="specialcontent">
            <p>Hilton hotel offer many special venues which have different and unique themes. </p>
            <p>Variety of seating arrangements to suit your number of guests.</p>
            <p>Hilton hotel offers a stunning backdrop for anniversary, evening party or meetings.</p>
            <p>Best place for your any special event in Sri Lanka.</p> 
            <p>Let us plan your dream party or meetings. </p>
        </div>

        <br></br>

        <div class="reservationBtn"> 
          <a href='/AllEventReservations'><button type="button" class="btn btn-outline-light btn-lg">All Reservations</button></a>
        </div>
        
        <br></br>
        <br></br>

        <section id="works"></section>

        <div class="container">
            <div class="row centered mt mb">
                <section class="container w-32.63 h-100" >
                <div class="container px-4">
                  <div class="th_row gx-8">
    
                    <div class="th_col">
                      <div style={{textDecoration:'none' ,color:'white'}}>

                      <img src="assets/th_imgs/meetingrooms.jpg" alt="" style={{height:'300px', width:'100%'}} />

                      <div class="introContent">
                        <h2 style={{color:'#c1630f'}}>Meeting Rooms</h2>

                        <p>Hilton Hotel offer premium services so that your business meetings are a success. 
                            Equipped with a video conference system, large screen projector, and even simultaneous interpretation services, 
                            our conference rooms and banquet halls are the perfect space for any event ranging from international conventions to small meetings.
                            Let us make the right choice for your special events. </p>

                        <br></br>

                        <table style={{width:'68%'}}>
                          <tr style={{height:'30px', fontWeight:'bold'}}>
                            <td>Capacity</td>
                            <td>50-100 Guests</td>
                          </tr>

                          <tr style={{height:'50px'}}>
                            <td>Setup</td>
                            <td>Indoor and Poolside</td>
                          </tr>

                          <tr>
                            <td>Include</td>
                            <td>Floor furniture</td>
                          </tr>

                          <tr>
                            <td></td>
                            <td>Floor lightning</td>
                          </tr>

                          <tr>
                            <td></td>
                            <td>Electrical equipments</td>
                          </tr>

                          <tr>
                            <td></td>
                            <td>Power supply</td>
                          </tr>

                          <tr style={{height:'50px', fontWeight:'bold'}}>
                            <td>Price</td>
                            <td>Rs.150000.00</td>
                          </tr>
                        </table>

                        <br></br>
                        <br></br>

                        <a href='/EventBook'><button class="th_introBtn" style={{color:'#c1630f'}}> Book Now </button></a>
                      </div>
    
                      </div>
                    </div>

                    <div class="th_col">
                      <div style={{textDecoration:'none' ,color:'white'}}>

                      <img src="assets/th_imgs/campingsuites.jpg" alt="" style={{height:'300px', width:'100%'}} />

                      <div class="introContent">
                        <h2 style={{color:'#37c10f'}}>Camping Suites</h2>

                        <p>Experience beachfront camping in the world-renowned wilderness of Yala, as you indulge in the luxury of the safari camp that lend us our name.
                        Candlelight dinner on the beach at night. 
                        Our wild shore is your exquisite dining room, with the choice of enjoying your meals at our main restaurant, or through our many signature dining experiences.
                        Let us make some different memeories.</p>

                        <br></br>

                        <table style={{width:'68%'}}>
                          <tr style={{height:'30px', fontWeight:'bold'}}>
                            <td>Capacity</td>
                            <td>250-400 Guests</td>
                          </tr>

                          <tr style={{height:'50px'}}>
                            <td>Setup</td>
                            <td>Indoor</td>
                          </tr>

                          <tr>
                            <td>Include</td>
                            <td>Floor furniture</td>
                          </tr>

                          <tr>
                            <td></td>
                            <td>Table decorations</td>
                          </tr>

                          <tr>
                            <td></td>
                            <td>Floor lightning</td>
                          </tr>

                          <tr>
                            <td></td>
                            <td>Power supply</td>
                          </tr>

                          <tr style={{height:'50px', fontWeight:'bold'}}>
                            <td>Price</td>
                            <td>Rs.280000.00</td>
                          </tr>
                        </table>

                        <br></br>
                        <br></br>

                        <a href='/EventBook'><button class="th_introBtn" style={{color:'#37c10f'}}> Book Now </button></a>
                      </div>
    
                      </div>
                    </div>

                    <div class="th_col">
                      <div style={{textDecoration:'none' ,color:'white'}}>

                      <img src="assets/th_imgs/poolside.jpg" alt="" style={{height:'300px', width:'100%'}} />

                      <div class="introContent">
                        <h2 style={{color:'#0f68c1'}}>Poolside Celeberation</h2>

                        <p>At our Garden Poolside, we offer tropically traditional ceremonies. 
                        The lush poolside will transport you to a faraway resort as we put all the right elements together for you to host ceremonies, surrounded by trees, blue waters and all your loved ones gathered around the poolside to witness your special day. 
                        At Hilton Hotel we offering many ways in which you can bring your nuptial concept to life.</p>


                        <br></br>

                        <table style={{width:'68%'}}>
                          <tr style={{height:'30px', fontWeight:'bold'}}>
                            <td>Capacity</td>
                            <td>80-100 Guests</td>
                          </tr>

                          <tr style={{height:'50px'}}>
                            <td>Setup</td>
                            <td>Indoor and Poolside</td>
                          </tr>

                          <tr>
                            <td>Include</td>
                            <td>Floor furniture</td>
                          </tr>

                          <tr>
                            <td></td>
                            <td>Floor lightning</td>
                          </tr>

                          <tr>
                            <td></td>
                            <td>Special decorations</td>
                          </tr>

                          <tr>
                            <td></td>
                            <td>Power supply</td>
                          </tr>

                          <tr style={{height:'50px', fontWeight:'bold'}}>
                            <td>Price</td>
                            <td>Rs.300000.00</td>
                          </tr>
                        </table>

                        <br></br>
                        <br></br>

                        <a href='/EventBook'><button class="th_introBtn" style={{color: '#0f68c1'}}> Book Now </button></a>
                      </div>
    
                      </div>
                    </div>
             
                  </div>

                </div>
                </section>
                
            </div>
        </div>
        
        <div class="d-flex justify-content-center"></div>
    
        </div>
    );
  }
}