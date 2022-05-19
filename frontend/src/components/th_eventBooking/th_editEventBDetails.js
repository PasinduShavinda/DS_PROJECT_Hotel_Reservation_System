import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';



export default class EditEventBook extends Component{


    constructor(props){
        super(props);
        this.state={
          
            fullName:"",
            email:"",
            nic:"",
            mobileNumber:"",
            bookingDate:"",
            bookingTime:"",
            numberOfGuests:"",
            eventType:"",
            eventHall:"",
          
        }
    }

    handleInputChange = (e) =>{
      const {name,value}=e.target;
      if (e.target.selected) {
        this.setState({ [name]: e.target.value });
      }
   
      this.setState({
        ...this.state,
        [name]:value 
        })  
    }
         
        onSubmit=(e)=>{
        e.preventDefault();
        const id=this.props.match.params.id;

  
            const{fullName,email,nic,mobileNumber,bookingDate,bookingTime,numberOfGuests,eventType,eventHall}=this.state;
        
            const data={
              fullName:fullName,
              email:email,
              nic:nic,
              mobileNumber:mobileNumber,
              bookingDate:bookingDate,
              bookingTime:bookingTime,
              numberOfGuests:numberOfGuests,
              eventType:eventType,
              eventHall:eventHall,
              
            }
           
          console.log(data);

          axios.put(`http://localhost:8280/event/updateEvent/${id}`,data).then((res)=>{
              if(res.data.success){
                  Swal.fire({
                    title: "your reseration details has been saved",
                    type: "success",
                    showConfirmButton: true,
                    confirmButtonText: 'View the Reservation',
                    icon: 'success',
             
                }).then(function() {
                  window.location = "/AllEventReservations";
              });;
                      
                this.setState(
                {
                    fullName:"",
                    email:"",
                    nic:"",
                    mobileNumber:"",
                    bookingDate:"",
                    bookingTime:"",
                    numberOfGuests:"",
                    eventType:"",
                    eventHall:"",
                }
                )
               
              }
          })

          
       
            
    }

    componentDidMount(){

      const id=this.props.match.params.id;
      axios.get(`http://localhost:8280/event/getEvent/${id}`).then((res)=>{
  
      if (res.data.success){
          this.setState({
             
              fullName:res.data.EventReservation.fullName,
              email:res.data.EventReservation.email,
              nic:res.data.EventReservation.nic,
              mobileNumber:res.data.EventReservation.mobileNumber,
              bookingDate:res.data.EventReservation.bookingDate,
              bookingTime:res.data.EventReservation.bookingTime,
              numberOfGuests:res.data.EventReservation.numberOfGuests,
              eventType:res.data.EventReservation.eventType,
              eventHall:res.data.EventReservation.eventHall,
              
          });
          console.log(this.state.EventReservation);
      }
  
  
      })
  }
 
    render() {
        
    
        return(
                            <div class="col-md-8 mt-4 mx-auto">
                            <h1 className="h3 mb-3 font-weight-normal">Reserve an Event Hall</h1>
                      
                            <form  onSubmit={this.onSubmit}>
                      
                              <div className="form-group" style={{marginBottom:'15px'}}>
                              <label class="form-label" for="form3Example1c">Full Name</label><br></br>
                              <input type="text" 
                                className="form-control" 
                                name="fullName"
                                placeholder="Enter the your name"
                                value={this.state.fullName}
                                onChange={this.handleInputChange}/>
                              </div>
                      
                              <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}}>Email Addrees</label><br></br>
                                <input type="text" 
                                className="form-control" 
                                name="email"
                                placeholder="Enter your email"
                                value={this.state.email}
                                onChange={this.handleInputChange}/>
                              </div>
                      
                              <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}}>NIC Number</label><br></br>
                                <input type="text" 
                                className="form-control" 
                                name="nic"
                                placeholder="Enter your NIC number"
                                value={this.state.nic}
                                onChange={this.handleInputChange}/>
                              </div>
                      
                              <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}}>Mobile Number</label><br></br>
                                <input type="text" 
                                className="form-control" 
                                name="mobileNumber"
                                placeholder="Enter your phone number"
                                value={this.state.mobileNumber}
                                onChange={this.handleInputChange}/>
                              </div>
                      
                              <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}}>Event Date</label><br></br>
                                <input type="date" 
                                className="form-control" 
                                name="bookingDate"
                                placeholder="Enter the date"
                                value={this.state.bookingDate}
                                onChange={this.handleInputChange}/>
                              </div>
                      
                              <div class="d-flex flex-row align-items-center mb-4">
                                <div class="form-outline flex-fill mb-0">
                                  <label class="form-label" for="form3Example4cd">Select Event Time</label>
                                    <select class="form-select" name="bookingTime" aria-label="Disabled select example"  onChange={this.handleInputChange}>
                                      <option value="" disabled selected hidden></option>
                                      <option  value="Day-time">Day Time</option>
                                      <option  value="Night-time">Night Time</option>
                                    </select>
                                </div>
                              </div>
                      
                              <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}}>Number of Guests</label>
                                <input type="number" 
                                className="form-control" 
                                name="numberOfGuests"
                                placeholder="Enter the count"
                                value={this.state.numberOfGuests}
                                onChange={this.handleInputChange}/>
                              </div>


                              <div class="d-flex flex-row align-items-center mb-4">
                                <div class="form-outline flex-fill mb-0">
                                  <label class="form-label" for="form3Example4cd">Select Event Reception Type</label>
                                    <select class="form-select" name="eventType" aria-label="Disabled select example"  onChange={this.handleInputChange}>
                                      <option value="" disabled selected hidden></option>
                                      <option  value="Wedding Hall">Wedding Hall</option>
                                      <option  value="Outdoor Functions">Outdoor Functions</option>
                                      <option value="Special Activities">Special Activities</option>
                                    </select>
                                </div>
                              </div>

                              <div class="d-flex flex-row align-items-center mb-4">
                                <div class="form-outline flex-fill mb-0">
                                  <label class="form-label" for="form3Example4cd">Select Event Hall Name</label>
                                    <select class="form-select" name="eventHall" aria-label="Disabled select example"  onChange={this.handleInputChange}>
                                      <option value="" disabled selected hidden></option>
                                      <option  value="Grand Ballroom">Grand Ballroom</option>
                                      <option  value="Ivy Ballroom">Ivy Ballroom</option>
                                      <option value="Crystal Ballroom">Crystal Ballroom</option>
                                      <option value="Garden Functions">Garden Functions</option>
                                      <option value="Beach Functions">Beach Functions</option>
                                      <option value="Rooftop Functions">Rooftop Functions</option>
                                      <option value="Meeting Rooms">Meeting Rooms</option>
                                      <option value="Camping suits">Camping suits</option>
                                      <option value="Poolside function">Poolside function</option>
                                    </select>
                                </div>
                              </div>
                      
                      
                              <button type="submit" class="btn btn-success" style={{marginBottom:'15px'}} onClick={this.onSubmit}>
                                <i className="far fa-check-square"></i>
                                &nbsp;Reserve
                              </button>
                                                  
                              
                            </form>
                      
                            </div>
                          

                            

);
                          
                            
    
    }}