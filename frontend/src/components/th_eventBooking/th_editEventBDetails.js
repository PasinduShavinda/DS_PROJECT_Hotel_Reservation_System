import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';


export default class EditEventBook extends Component{


    constructor(props){
        super(props);
        this.state={
          errors:{},
            fullName:"",
            email:"",
            nic:"",
            mobileNumber:"",
            bookingDate:"",
            bookingTime:"",
            numberOfGuests:0,
            eventType:"",
            eventHall:"",
          
        }
    }
        
        
    handleInputChange = (e) =>{
        const {fullName,value}=e.target;
        if (e.target.selected) {
            this.setState({ [fullName]: e.target.value });
        }
       
        this.setState({
        ...this.state,
           [fullName]:value 
          })  
    }



        formValidation=()=>{
            const{fullName,email}=this.state;
            let isValid=true;
            const errors={};
          
          
          if(fullName.trim().length===0||email.trim().length===0){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'A required feild is missing .Please fill out all required fields and try again',
            })
            isValid=false; 
          }
          if(!email.includes("@")){
            errors.email="Enter valid Email adress";
            isValid=false;
          }

           this.setState({errors});
           return isValid;
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

          axios.put(`http://localhost:8280/event/updateEvent/${id}`).then((res)=>{
              if(res.data.success){
                  Swal.fire({
                    title: "your reseration details has been saved",
                    type: "success",
                    showConfirmButton: true,
                    confirmButtonText: 'View the Bill',
                    icon: 'success',
                }).then(function() {
                    window.location = "/bookeddetails";
                });
                      
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
               
                fullName:res.data.eventBooking.fullName,
                email:res.data.eventBooking.email,
                nic:res.data.eventBooking.nic,
                mobileNumber:res.data.eventBooking.mobileNumber,
                bookingDate:res.data.eventBooking.bookingDate,
                bookingTime:res.data.eventBooking.bookingTime,
                numberOfGuests:res.data.eventBooking.numberOfGuests,
                eventType:res.data.eventBooking.eventType,
                eventHall:res.data.eventBooking.eventHall,
                
            });
            console.log(this.state.eventBooking);
        }
    
    
        })
    }
 
    render() {
    
        return(
            <div class="col-md-8 mt-4 mx-auto">
                            <h1 className="h3 mb-3 font-weight-normal">Reserve an Event Hall</h1>
                      
                            <form className="need-validation" noValidate onSubmit={this.onSubmit}>
                      
                              <div className="form-group" style={{marginBottom:'15px'}}>
                              <label style={{marginBottom:'5px'}}>Full Name</label><br></br>
                              <input type="text" className="form-control" 
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
                      
                              <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px'}}>Event Time</label><br></br>

                                <input type="radio" id="day" name="bookingTime" value="Day"></input>
                                <label for="day">Day</label>
                                <br></br>
                                <input type="radio" id="night" name="bookingTime" value="Night"></input>
                                <label for="night">Night</label>
                                <br></br>

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
                      
                      
                              <button type="submit" class="btn btn-success" style={{marginBottom:'15px'}} onClick={this.onSubmit}>
                                <i className="far fa-check-square"></i>
                                &nbsp;Update
                              </button>
                      
                              
                              
                            </form>
                      
                            </div>

    );
    }}