import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import ReactToPrint from 'react-to-print';

class RoomBill extends Component{
    constructor(props){
        super(props);
        this.state={
        
        reservations:[]
        
        
        };
        
        
        
        }
        
        
        componentDidMount(){
            this.retriveReservation();
        }
        
        
        retriveReservation(){
        axios.get("http://localhost:8280/room/getLastRoom").then(res=>{
        if(res.data.success){
            this.setState({
                reservations:res.data.existingReservations
            })
            console.log(this.state.reservations)
        }
        
        
        })
        
        }
    
        
onDelete= (id) =>{
  
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your Reservation has been Removed.',
          'success'
        ).then(function() {
          window.location = "/";
      });
  
         axios.delete(`http://localhost:8280/room/deleteRoom/${id}`).then((res)=>{
        // alert("Delete successfully");
          this.retriveReservations();
      }).then( window.location ="/")
  
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your Reservation has been saved',
          'error'
        )
      }
    })
  
  
    
  }
        
 
  
// To calculate the no. of days between two dates

 
          

  render() {
   
    
    return(
     <div className='sugcontent2'>
<div className='container py-5 h-100'>
<div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" >
          <div class="card-body p-md-5">
            <div >
              <div >

  <h1 class="d-flex justify-content-center">Reservation Details</h1>
{this.state.reservations.map(reservations=>(
           
           <div className='container py-5 h-100'>
   <dl class="row">
  <dt class="col-sm-3">Name</dt>
  <dd class="col-sm-8">{reservations.Name}</dd>

  <dt class="col-sm-3">Email</dt>
  <dd class="col-sm-8">{reservations.email}</dd>

  <dt class="col-sm-3">Checking</dt>
  <dd class="col-sm-8">{reservations.Checking}</dd>

  <dt class="col-sm-3 ">Checkout</dt>
  <dd class="col-sm-8">{reservations.Checkout}</dd>
  
  <dt class="col-sm-3 ">Number of Nights</dt>
  <dd class="col-sm-8">{reservations.NoOfDates}</dd>

  <dt class="col-sm-3 ">Board type</dt>
  <dd class="col-sm-8">{reservations.Board_Type}</dd>
   
  <dt class="col-sm-3">Number of people </dt>
  <dd class="col-sm-8">
    <dl class="row">
      <dt class="col-sm-4">Adults</dt>
      <dd class="col-sm-8">{reservations.NoOfAdults}</dd>

      <dt class="col-sm-4">Childeren</dt>
      <dd class="col-sm-8">{reservations.NoOfChilderen}</dd>
    </dl>
  </dd>

</dl>








   <div className='container py-2 h-100'>
   <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Room Type</th>
      <th scope="col">Booked </th>
      <th scope="col">Price per one Room</th>
      <th scope="col">Total amout</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Double Room</th>
      <td>{reservations.NoOfDoubleRooms}</td>
      <td>Rs. 10,000</td>
      <td>Rs. {(parseInt(reservations.NoOfDoubleRooms)*10000)}</td>
    </tr>
    <tr>
      <th scope="row">Family Room</th>
      <td>{reservations.NoOfFamilyRooms}</td>
      <td>Rs. 15,000</td>
      <td>Rs. {(parseInt(reservations.NoOfFamilyRooms)*15000)}</td>
    </tr>
    <tr>
      <th scope="row">Suit Room</th>
      <td>{reservations.NoOfSuiteRooms}</td>
      <td>Rs. 20,000</td>
      <td>Rs. {(parseInt(reservations.NoOfSuiteRooms)*20000)}</td>
    </tr>
    <tr>
  
      <td colspan="3" >Accommodation Chares per one day</td>
      <td>Rs. {((parseInt(reservations.NoOfSuiteRooms)*20000)+(parseInt(reservations.NoOfFamilyRooms)*15000)+(parseInt(reservations.NoOfDoubleRooms)*10000))}</td>
    </tr>

    <tr>
  
  <td colspan="3">Accommodation Chares for {reservations.NoOfDates} days</td>
  <td>Rs. {((parseInt(reservations.NoOfSuiteRooms)*20000)+(parseInt(reservations.NoOfFamilyRooms)*15000)+(parseInt(reservations.NoOfDoubleRooms)*10000))* (parseInt(reservations.NoOfDates))}</td>
</tr>
  </tbody>
</table>
</div>
<h5> Service chararges and meal cost can pay before the Checkout</h5>


<a href = "/payHome"><button class="btn btn-outline-dark btn-lg">Pay Now</button></a>
&nbsp;&nbsp;&nbsp;
<a className="btn btn-outline-dark btn-lg" href={`/editReservation/${reservations._id}`}>
     <i className="fas fa-edit"></i>&nbsp;&nbsp;&nbsp;Edit
   </a>
   &nbsp;
   <a className="btn btn-outline-dark btn-lg" onClick={()=>this.onDelete(reservations._id)}>
     <i className="fas fa-edit"></i>&nbsp;&nbsp;&nbsp;Cancel the Reservation
   </a>
    </div>
       ))}

</div>
</div>
</div>
</div>
</div>
</div>

     </div>
     </div>
    );
  }
}


export default class BookedDetails extends React.PureComponent {
  render() {
    return (
      
      <div>
        <ReactToPrint
           trigger={() => {
             // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
              //to the root node of the returned component as it will be overwritten.
             return <a href="#">Print this out!</a>;
          }}
           content={() => this.componentRef}
         />
         
         <RoomBill ref={el => (this.componentRef = el)} />
       </div>
     );
   }
 }