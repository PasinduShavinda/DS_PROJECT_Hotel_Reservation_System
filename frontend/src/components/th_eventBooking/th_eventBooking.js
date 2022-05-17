import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';


export default class EventBook extends Component{


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
            numberOfGuests:"",
            eventType:"",
            eventHall:"",
          
        }
    }
        
        
    handleInputChange = (e) =>{
        const {fullName,value}=e.target;
        // if (e.target.selected) {
        //     this.setState({ [fullName]: e.target.value });
        // }
       
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
        const isValid=this.formValidation();

        if(isValid){
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

          axios.post(`http://localhost:8280/event/saveEvent`,data).then((res)=>{
              if(res.data.success){
                  Swal.fire({
                    title: "your reseration details has been saved",
                    type: "success",
                    showConfirmButton: true,
                    confirmButtonText: 'View the Bill',
                    icon: 'success',
                /*}).then(function() {
                    window.location = "/bookeddetails";*/
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
       
            
    }
 
    render() {
        // const{fullName,email,nic,mobileNumber,bookingDate,bookingTime,numberOfGuests,eventType,eventHall,errors}=this.state;
    
        return(
            {/*<div className='thformContent'>
            <div class="form-group">

                                <h2 class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Reserve an Event Hall</h2>

                                <form class="mx-1 mx-md-4" onSubmit={this.onSubmit} action="/action_page.php">

                                    <div class="d-flex flex-row align-items-center mb-4">
                                        
                                        <div class="form-outline flex-fill mb-0">
                                        
                                            <label class="form-label">Full Name</label>
                                            <input type="text"  
                                            class="form-control" 
                                            name="fullName" 
                                            value={this.state.fullName}
                                            onChange={this.handleInputChange} />
                                        
                                        </div>

                                    </div>

                                    <div class="d-flex flex-row align-items-center mb-4">
                                    
                                        <div class="form-outline flex-fill mb-0">
                                            <label class="form-label" for="form3Example3c">Email Address</label>
                                            <input type="email" 
                                            id="form3Example3c" 
                                            class="form-control" 
                                            name="email" 
                                            value={this.state.email}
                                            onChange={this.handleInputChange}/>
                                        </div>

                                    </div>

                                    <div class="d-flex flex-row align-items-center mb-4">
                                    
                                        <div class="form-outline flex-fill mb-0">
                                            <label class="form-label" for="form3Example3c">NIC Number</label>
                                            <input type="text" 
                                            id="form3Example3c" 
                                            class="form-control" 
                                            name="nic" 
                                            value={this.state.nic}
                                            onChange={this.handleInputChange}/>
                                        </div>

                                    </div>

                                    <div class="d-flex flex-row align-items-center mb-4">
                                    
                                        <div class="form-outline flex-fill mb-0">
                                            <label class="form-label" for="form3Example3c">Mobile Number</label>
                                            <input type="text" 
                                            id="form3Example3c" 
                                            class="form-control" 
                                            name="mobileNumber" 
                                            value={this.state.mobileNumber}
                                            onChange={this.handleInputChange}/>
                                        </div>
                                        
                                    </div>



                                    <div class="d-flex flex-row align-items-center mb-4">
                                    
                                        <div class="form-outline flex-fill mb-0">
                                            <label class="form-label" for="form3Example4cd">Booking Date</label>
                                            <SingleDatePicker
                                                bookingDate={this.state.bookingDate}
                                                bookingDateId="your_unique_start_date_id"
                                                focusedInput={this.state.focusedInput} 
                                                onFocusChange={focusedInput => this.setState({ focusedInput })} 
                                            />

                                        </div>
                                    </div>
  
                   
    


                   


                   <div class="d-flex flex-row align-items-center mb-4">
                    
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example4cd">Select Board Type</label>
                   <select class="form-select" fullName="Board_Type" aria-label="Disabled select example"  onChange={this.handleInputChange}>
                   <option value="" disabled selected hidden></option>
                      <option  value="full_board">Ful Board</option>
                        <option  value="Half Board">Half Board</option>
                           <option value="Bed and Brekfast">Bed and Breakfast</option>
                             </select>
                               </div>
        </div>


              
              
                                {Object.keys(errors).map((key)=>{
                                    return <div style={{color: "red"}} key={key}><h5>{errors[key]}</h5></div>
                                })}  
                
                      

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" class="btn btn-primary btn-lg" onClick={this.onSubmit}>Reserve</button>
                  </div>













                </form>

                            </div>
                            </div>
                            );*/},


                            <div class="col-md-8 mt-4 mx-auto">
                            <h1 className="h3 mb-3 font-weight-normal">Reserve an Event Hall</h1>
                      
                            <form className="need-validation" noValidate onSubmit={this.onSubmit}>
                      
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
                                &nbsp;Reserve
                              </button>
                      
                              {/* {Object.keys(errors).map((key)=>{
                                return <div key={key}>{errors[key]}</div>
                              })} */}
                              
                            </form>
                      
                            </div>

);
                          
                            
    
    }}