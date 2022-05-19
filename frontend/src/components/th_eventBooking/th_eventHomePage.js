import React, { Component } from 'react';
import axios from 'axios';
import "./styles/th_style.css";

export default class eventHomePage extends Component{

  render() {
    
    return(
        <div>
      
        <div id="headerpart">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-lg-offset-3">
                        
                        <h1>Wedding Halls & Other Occasions</h1>
                        <h3>For Most Beautiful Occasions</h3>
                        
                        <a href='/AllEventReservations'><button type="button" class="btn btn-outline-light btn-lg">All Reservations</button></a>
                        
                        <br></br>
                    </div>
                </div>
            </div> 
        </div>
        
    
        <section id="works"></section>

        <div class="container">
            <div class="row centered mt mb">
                <h1 class="d-flex justify-content-center"> Event Types </h1>
                <section class="container w-32.63 h-100" >
                <div class="container px-4">
                  <div class="th_row gx-8">
    
                    <div class="th_col">
                      <div style={{textDecoration:'none' ,color:'white'}}>

                      <img src="assets/th_imgs/weddinghallintro.jpg" alt="" style={{height:'300px', width:'100%'}} />

                      <div class="introContent">
                        <h2 style={{color:'#8405bf'}}>Wedding Halls</h2>

                        <p>Made your special day even more special and unique with our venues. 
                        We will make your most important day a memeorable event.
                        Not only for weddings but also for birthday celebrations, aniversary celebrations and so on things.
                        We have many grand wedding halls for reasonable prices also with many different perspectives.</p>

                        <ul>Grand Ballroom</ul>
                        <ul>Ivy Ballroom</ul>
                        <ul>Crystal Ballroom</ul>

                        <br></br>
                        <br></br>

                        <a href='/Weddinghall'><button class="th_introBtn" style={{color:'#8405bf'}}> Book Now </button></a>
                      </div>
    
                      </div>
                    </div>

                    <div class="th_col">
                      <div style={{textDecoration:'none' ,color:'white'}}>

                      <img src="assets/th_imgs/outdoorfunctionintro.jpg" alt="" style={{height:'300px', width:'100%'}} />

                      <div class="introContent">
                        <h2 style={{color:'#05bf2a'}}>Outdoor Functions</h2>

                        <p>If you are willing to celebrate special occasion in outdoor. The best place is our hotel. 
                        You can decide the venue according to your opinion. This will made a huge difference memory for all the guests.
                        We will make your most important day a memeorable event.
                        For reasonable prices with many different perspectives.</p>

                        <ul>Garden Functions</ul>
                        <ul>Beach Function</ul>
                        <ul>Rooftop Functions</ul>

                        <br></br>
                        <br></br>

                        <a href='/OutdoorFunction'><button class="th_introBtn" style={{color:'#05bf2a'}}> Book Now </button></a>
                      </div>
    
                      </div>
                    </div>

                    <div class="th_col">
                      <div style={{textDecoration:'none' ,color:'white'}}>

                      <img src="assets/th_imgs/specialactivitiesintro.jpg" alt="" style={{height:'300px', width:'100%'}} />

                      <div class="introContent">
                        <h2 style={{color:'#f0eda0'}}>Special Activities</h2>

                        <p>Do you need a place to hold a meeting or are you willing to enjoy your holidays in a luxury camping site.
                        This is your chance. Also need a romantic place to celebrate your anniversary with your partner. 
                        We have those options for you. Don't miss this great opportunity.
                        For reasonable prices with many different perspectives.</p>


                        <ul>Meeting Rooms</ul>
                        <ul>Camping Suites</ul>
                        <ul>Poolside Celebration</ul>

                        <br></br>
                        <br></br>

                        <a href='/SpecialActivities'><button class="th_introBtn" style={{color: '#f0eda0'}}> Book Now </button></a>
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