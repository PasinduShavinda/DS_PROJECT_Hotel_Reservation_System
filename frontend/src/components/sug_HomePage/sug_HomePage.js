import React, { Component } from 'react';
import axios from 'axios';



export default class HomePage extends Component{

 
          

  render() {
    
    return(
     <div> 
     <div class="navbar navbar-default navbar-fixed-top" role="navigation">
       <div class="container">
         <div class="navbar-header">
           <a class="navbar-brand" href="/admindashbord">Admin Dashboard</a>
         </div>
         
       </div>
     </div>
 
 
   <div id="headerwrap2">
       <div class="container">
       <div class="row">
         <div class="col-lg-6 col-lg-offset-3">
           
           <h1>Hilton Hotels</h1>
           <p >Savour your penchant for finer comforts. Partner with sheer luxury at Hilton hotels, as you attend a business event in the capital city. Let the opulence of our meeting rooms and conference halls seep into flourishing work partnerships. Raise a toast to all the success at our plush restaurants and taste jubilance like never before. When you’ve enjoyed every bit of your Grand accomplishments, retire to your room, and relish in the exquisite comforts that Colombo’s most lavish business hotel has to offer.</p>
         </div>
       </div>
       </div> 
   </div>
   
   <section id="works"></section>
   <div class="container">
     <div class="row centered mt mb">
       
       <h1  class="d-flex justify-content-center">Our services</h1>
       <center><p><b>Click On the Image Of Your Choice !!</b></p></center>
       
       <div class="col-lg-4 col-md-4 col-sm-4 gallery">
         <a href="/roomhomepage"><img src="assets/img/portfolio/room.jpg" class="img-responsive"/></a>
        <center><p><b>Room Reservation</b></p></center>
       </div>
       <div class="col-lg-4 col-md-4 col-sm-4 gallery">
         <a href="/eventHome"><img src="assets/img/portfolio/event.jpg" class="img-responsive"/></a>
         <center><p><b>Event Reservation</b></p></center>
       </div>
       <div class="col-lg-4 col-md-4 col-sm-4 gallery">
         <a href="/TaxiAdminClient"><img src="assets/img/portfolio/taxi.jpg" class="img-responsive"/></a>
         <center><p><b>Taxi Reservation</b></p></center>
       </div>
       <center>
       <div class="col-lg-4 col-md-4 col-sm-4 gallery">
         <a href="/location"><img src="https://1gr.cz/fotky/idnes/20/121/cl5/DVR87f020_gmapy00.png" class="img-responsive"/></a>
         <center><p><b> Hotel Location</b></p></center>
       </div>
       </center>
     
     
      
      
     </div>
   </div>
   
   <div id="social">
     <div class="container">
       <div class="row centered">
         <div class="col-lg-2">
           <a href="#"><i class="fa fa-dribbble"></i></a>
         </div>
         <div class="col-lg-2">
           <a href="#"><i class="fa fa-facebook"></i></a>
         </div>
         <div class="col-lg-2">
           <a href="#"><i class="fa fa-twitter"></i></a>
         </div>
         <div class="col-lg-2">
           <a href="#"><i class="fa fa-linkedin"></i></a>
         </div>
         <div class="col-lg-2">
           <a href="#"><i class="fa fa-instagram"></i></a>
         </div>
         <div class="col-lg-2">
           <a href="#"><i class="fa fa-tumblr"></i></a>
         </div>
       
       </div>
     </div>
   </div>
 
   <div id="footerwrap">
     <div class="container">
       <div class="row centered">
         <div class="col-lg-4">
           <p><b>2 Sir Chittampalam A Gardiner
Mawatha, Colombo, 00200, Sri Lanka</b></p>
         </div>
       
         <div class="col-lg-4">
           <p>CALL US</p>
<p>+94 112 492 492</p>
         </div>
         <div class="col-lg-4">
           <p>hilton@hotels.com</p>
         </div>
       </div>
     </div>
   </div>
   

     </div>
    );
  }
}