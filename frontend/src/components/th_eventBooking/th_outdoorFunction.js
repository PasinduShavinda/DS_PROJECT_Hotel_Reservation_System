import React, { Component } from 'react';
import axios from 'axios';
import "./styles/th_style.css";



export default class OutdoorFunction extends Component{

  render() {
    
    return(
        <div>
      
        <div id="headerpart3">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-lg-offset-3">
                        
                        <h1>Outdoor Functions</h1>
                        
                    </div>
                </div>
            </div> 
        </div>

        <br></br>
        <br></br>

        <div class="outdoorcontent">
            <p>Hilton hotel offer many wedding ballrooms in outside which have different and unique themes. </p>
            <p>Variety of seating arrangements to suit your number of guests.</p>
            <p>Hilton hotel offers a stunning area for beach party, garden function or a rooftop function.</p>
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

                      <img src="assets/th_imgs/gardenfunction.jpg" alt="" style={{height:'300px', width:'100%'}} />

                      <div class="introContent">
                        <h2 style={{color:'#2de557'}}>Garden Function</h2>

                        <p>If you have been dreaming of a grand, green garden wedding, then the Angsana Garden is your dream outdoor venue. 
                        Imagine flowers strewn across the lawn and dangling all around you as you take your final walk as a singleton and what you imagine will more than come to life. Poruwa ceremonies, church weddings, engagements, pre-wedding cocktails and more can all manifest and be yours at the Angsana Garden. </p>

                        <br></br>

                        <table style={{width:'68%'}}>
                          <tr style={{height:'30px', fontWeight:'bold'}}>
                            <td>Capacity</td>
                            <td>200-250 Guests</td>
                          </tr>

                          <tr style={{height:'50px'}}>
                            <td>Setup</td>
                            <td>Outdoor</td>
                          </tr>

                          <tr>
                            <td>Include</td>
                            <td>Furniture</td>
                          </tr>

                          <tr>
                            <td></td>
                            <td>Graden decorations</td>
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
                            <td>Rs.350000.00</td>
                          </tr>
                        </table>

                        <br></br>
                        <br></br>

                        <a href='/EventBook'><button class="th_introBtn" style={{color:'#2de557'}}> Book Now </button></a>
                      </div>
    
                      </div>
                    </div>

                    <div class="th_col">
                      <div style={{textDecoration:'none' ,color:'white'}}>

                      <img src="assets/th_imgs/beachfunction.jpg" alt="" style={{height:'300px', width:'100%'}} />

                      <div class="introContent">
                        <h2 style={{color:'#2dbee5'}}>Beach Function</h2>

                        <p>To shake off the pressure, you can make it a glamorous celebration with the mix of Sri Lanka and European weddings. 
                        This is evident in the package offered inclusive of treats such as the Sri Lankan master of ceremonies, traditional poruwa, chantings, saree and national knit for the couple, to name a few.
                        Weddings overlooking the Laccadive Sea, will have you cherish them for eternity. Licensed for civil ceremonies, </p>

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
                            <td>Furniture</td>
                          </tr>

                          <tr>
                            <td></td>
                            <td>Table decorations</td>
                          </tr>

                          <tr>
                            <td></td>
                            <td>Lightning system</td>
                          </tr>

                          <tr>
                            <td></td>
                            <td>Power supply</td>
                          </tr>

                          <tr style={{height:'50px', fontWeight:'bold'}}>
                            <td>Price</td>
                            <td>Rs.650000.00</td>
                          </tr>
                        </table>

                        <br></br>
                        <br></br>

                        <a href='/EventBook'><button class="th_introBtn" style={{color:'#2dbee5'}}> Book Now </button></a>
                      </div>
    
                      </div>
                    </div>

                    <div class="th_col">
                      <div style={{textDecoration:'none' ,color:'white'}}>

                      <img src="assets/th_imgs/rooftopfunction.jpg" alt="" style={{height:'300px', width:'100%'}} />

                      <div class="introContent">
                        <h2 style={{color:'#c10f0f'}}>Rooftop Function</h2>

                        <p>Hilton hotel has some of the best outdoor rooftop bars in the country,
                             where people can enjoy the sizzling warm weather and take in amazing city views. There are so many reasons for that such as Perfect for Hosting Cocktail Receptions on-site,
                             Great Choice for Guests to Mingle on Their Own, Guests Will Rave About the Venue Choice. So let us celebrate yoour most special day in a different way.</p>


                        <br></br>

                        <table style={{width:'68%'}}>
                          <tr style={{height:'30px', fontWeight:'bold'}}>
                            <td>Capacity</td>
                            <td>150-200 Guests</td>
                          </tr>

                          <tr style={{height:'50px'}}>
                            <td>Setup</td>
                            <td>Indoor and outdoor</td>
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
                            <td>Rs.250000.00</td>
                          </tr>
                        </table>

                        <br></br>
                        <br></br>

                        <a href='/EventBook'><button class="th_introBtn" style={{color: '#c10f0f'}}> Book Now </button></a>
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