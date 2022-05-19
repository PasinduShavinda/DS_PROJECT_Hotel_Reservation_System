import React, { Component } from 'react';
import axios from 'axios';
import "./styles/th_style.css";



export default class WeddingHall extends Component{

  render() {
    
    return(
        <div>
      
        <div id="headerpart2">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-lg-offset-3">
                        
                        <h1>Wedding Halls</h1>
                        
                    </div>
                </div>
            </div> 
        </div>

        <br></br>
        <br></br>

        <div class="weddingcontent">
            <p>Hilton hotel offer many wedding ballrooms which have different and unique themes. </p>
            <p>Variety of seating arrangements to suit your number of guests.</p>
            <p>Hilton hotel offers a stunning backdrop for the wedding ceremony, evening party.</p>
            <p>Create magical memories to last a lifetime in one of the most exclusive wedding venues in Sri Lanka.</p> 
            <p>Let us plan your dream wedding. </p>
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

                      <img src="assets/th_imgs/grandBallroom.jpg" alt="" style={{height:'300px', width:'100%'}} />

                      <div class="introContent">
                        <h2 style={{color:'#f07a12'}}>Grand Ballroom</h2>

                        <p>Looking more luxurious than ever, the Grand ballroom at Hilton hotel offers a fine space for your special event. 
                        With the package for this venue comes complimentary benefits such as a fully air-conditioned, changing room for the bride and a one-night stay for the couple with breakfast at the all-day dining restaurant.
                        Let us plan your special wedding in an amazing grand receprtion hall.</p>

                        <br></br>

                        <table style={{width:'68%'}}>
                          <tr style={{height:'30px', fontWeight:'bold'}}>
                            <td>Capacity</td>
                            <td>700-1000 Guests</td>
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
                            <td>Rs.450000.00</td>
                          </tr>
                        </table>

                        <br></br>
                        <br></br>

                        <a href='/EventBook'><button class="th_introBtn" style={{color:'#f07a12'}}> Book Now </button></a>
                      </div>
    
                      </div>
                    </div>

                    <div class="th_col">
                      <div style={{textDecoration:'none' ,color:'white'}}>

                      <img src="assets/th_imgs/ivyBallroom.jpg" alt="" style={{height:'300px', width:'100%'}} />

                      <div class="introContent">
                        <h2 style={{color:'#3310be'}}>Ivy Ballroom</h2>

                        <p>If going extravagant is your style, then the Atrium is the perfect place to impress your guests. 
                          With grand seating, lavish décor and bright lights, your wedding ceremony is sure to look as awesome as you’d imagined.
                          We propose this space for your most intimate gatherings. 
                          So, get the girls together for the hen’s night of your life, or host a family-only engagement party.</p>

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

                        <a href='/EventBook'><button class="th_introBtn" style={{color:'#3310be'}}> Book Now </button></a>
                      </div>
    
                      </div>
                    </div>

                    <div class="th_col">
                      <div style={{textDecoration:'none' ,color:'white'}}>

                      <img src="assets/th_imgs/crystalBallroom.jpg" alt="" style={{height:'300px', width:'100%'}} />

                      <div class="introContent">
                        <h2 style={{color:'#f0eda0'}}>Crystal Ballroom</h2>

                        <p>Hilton hotel is a luxury hotel famous for the many traditional weddings. 
                          Traditional attire for the bride and groom, Kandyan dancers and drummers to accompany them to the poruwa (a decorated ceremonial stage), 
                          champagne to celebrate the event and other luxuries are provided so that you have the paradise wedding you have always dreamed about.</p>


                        <br></br>

                        <table style={{width:'68%'}}>
                          <tr style={{height:'30px', fontWeight:'bold'}}>
                            <td>Capacity</td>
                            <td>400-600 Guests</td>
                          </tr>

                          <tr style={{height:'50px'}}>
                            <td>Setup</td>
                            <td>Indoor and Lobby Areas</td>
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
                            <td>Rs.350000.00</td>
                          </tr>
                        </table>

                        <br></br>
                        <br></br>

                        <a href='/EventBook'><button class="th_introBtn" style={{color: '#f0eda0'}}> Book Now </button></a>
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