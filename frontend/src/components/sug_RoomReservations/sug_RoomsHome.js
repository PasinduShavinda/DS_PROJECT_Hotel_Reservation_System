import React, { Component } from 'react';
import axios from 'axios';

export default class RoomsHome extends Component{

 
          

  render() {
    
    return(
     <div>
      


	<div id="headerwrap">
	    <div class="container">
			<div class="row">
				<div class="col-lg-6 col-lg-offset-3">
					
					<h1>Luxury Rooms</h1>
					
					<a href='/reserveroom'><button type="button" class="btn btn-outline-light btn-lg">Book Now </button></a>
					&nbsp;&nbsp;&nbsp;&nbsp;
					<a href='/Allreservations'><button type="button" class="btn btn-outline-light btn-lg">All Reservations</button></a>
				</div>
			</div>
	    </div> 
	</div>
	

	<section id="works"></section>
	<div class="container">
		<div class="row centered mt mb">
			<h1 class="d-flex justify-content-center"> Room Types</h1>
			<section class="container py-5 h-100" >
<div class="container px-4">
        <div class="row gx-8">

          <div class="col">
            <div style={{textDecoration:'none' ,color:'white'}}>
			<img src="assets/img/portfolio/double.jpg" class="img-responsive"/>
                <div class="p-5 border bg-dark">
					<h3>Doudle Room</h3>
					<p>A luxurious accommodation option that comes with twin beds.</p>
					<dl class="row">
      <dt class="col-sm-4">Room Size</dt>
      <dd class="col-sm-8">34 SQM</dd>

      <dt class="col-sm-4">Occupancy</dt>
      <dd class="col-sm-8">2 Adults</dd>

	  <dt class="col-sm-4">One Night</dt>
      <dd class="col-sm-8">Rs. 10,000</dd>

	  <dt class="col-sm-4">Available</dt>
      <dd class="col-sm-8">40 Rooms</dd>
    </dl>
					</div>

            </div>
          </div>

          <div class="col">
            <div style={{textDecoration:'none' ,color:'white'}}> 
			<img src="assets/img/portfolio/family.jpg" class="img-responsive"/>
                <div class="p-5 border bg-dark">
					<h3> Family Room</h3>
					<p>Enjoy a spacious abode that’s perfect for some quality family time</p>
					<dl class="row">
					
      <dt class="col-sm-4">Room Size</dt>
      <dd class="col-sm-8">60 SQM</dd>

      <dt class="col-sm-4">Occupancy</dt>
      <dd class="col-sm-8">4 Adults</dd>

	  <dt class="col-sm-4">One Night</dt>
      <dd class="col-sm-8">Rs. 15,000</dd>

	  <dt class="col-sm-4">Available</dt>
      <dd class="col-sm-8">20 Rooms</dd>
    </dl>
					</div>
            </div>
          </div>






          <div class="col">
            <div style={{textDecoration:'none' ,color:'white'}}> 
			<img src="assets/img/portfolio/suit2.jpg" class="img-responsive"/>
                <div class="p-5 border bg-dark">
					<h3>Suit Rooms</h3>
					<p>Suites are urbane in style evolving great stateliness to delight the astute guests.</p>
					<dl class="row">
					
					<dt class="col-sm-4">Room Size</dt>
					<dd class="col-sm-8">502 SQM</dd>
			  
					<dt class="col-sm-4">Occupancy</dt>
					<dd class="col-sm-8">2 Adults</dd>
			  
					<dt class="col-sm-4">One Night</dt>
					<dd class="col-sm-8">Rs. 20,000</dd>

					<dt class="col-sm-4">Available</dt>
                  <dd class="col-sm-8"> 4 Suites</dd>
				  </dl>

					</div>
            </div>
          </div>
         
        </div>
      </div>
      </section>
			
			
			
		</div>
	</div>
	<div class="d-flex justify-content-center">
	
	</div>
	
</div>
    );
  }
}