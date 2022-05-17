import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';


export default class RoomBook extends Component{


    constructor(props){
        super(props);
        this.state={
          errors:{},
            Name:"",
            email:"",
            Checking:"",
            Checkout:"",
            startDate:null,
            endDate:null,
            NoOfDates:"",
            Board_Type:"",
            NoOfDoubleRooms:0,
            NoOfFamilyRooms:0,
            NoOfSuiteRooms:0,
            NoOfChilderen:0,
            NoOfAdults:0,
 
        
            
          
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








        formValidation=()=>{
          const{Name,email,Checking,Checkout,startDate,
            endDate,Board_Type,NoOfDoubleRooms,NoOfFamilyRooms,NoOfSuiteRooms,NoOfAdults,NoOfChilderen}=this.state;
          
          let isValid=true;
          const errors={};
          
          
          if(Name.trim().length==0||email.trim().length==0||Board_Type.trim().length==0){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'A required feild is missing .Please fill out all required fields and try again',
            })
            isValid=false; 
          }
          if(parseInt(NoOfFamilyRooms)>20){
            errors.NoOfFamilyRooms="Only 20 Family Rooms Are Available";
            isValid=false;
          }
          if(parseInt(NoOfDoubleRooms)>40){
            errors.NoOfDoubleRooms="Only 40 Double Rooms Are Available";
            isValid=false;
          }
          if(parseInt(NoOfSuiteRooms)>4){
            errors.NoOfSuiteRooms="Only 4 Suite Rooms Are Available";
            isValid=false;

          } if(!email.includes("@")){
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
            const{Name,email,Checking,Checkout,startDate,
              endDate,Board_Type,NoOfDoubleRooms,NoOfFamilyRooms,NoOfSuiteRooms,NoOfAdults,NoOfChilderen}=this.state;
           
  
            
           
            
              const data={
              Name:Name,
              email:email,
              Checking: startDate,
              Checkout:endDate,
              NoOfDates:(new Date(endDate)-new Date(startDate)) / (1000 * 3600 * 24),
              Board_Type:Board_Type,
              NoOfDoubleRooms:NoOfDoubleRooms,
              NoOfFamilyRooms:NoOfFamilyRooms,
              NoOfSuiteRooms:NoOfSuiteRooms,
              NoOfAdults:NoOfAdults,
              NoOfChilderen:NoOfChilderen
            }
           
          console.log(data);
          axios.post(`http://localhost:8280/room/saveRoom`,data).then((res)=>{
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
                  Name:"",
                  email:"",
                  Checking:"",
                  Checkout:"",
                  NoOfRooms:"",
                  NoOfPeople:"",
                  Board_Type:"",
                  NoOfDoubleRooms:"",
                  NoOfSuiteRooms:"",
                  NoOfFamilyRooms:"",
                  NoOfSuiteRooms:0,
                  NoOfChilderen:0,
                  NoOfAdults:0,
                  NoOfChilderen:0
         
                }
                )
               
              }
          })

          }
       
            
    }
 
  render() {
    const{Name,email,Checking,Checkout,startDate,
      endDate,Board_Type,NoOfDoubleRooms,NoOfFamilyRooms,NoOfSuiteRooms,NoOfAdults,NoOfChilderen,errors}=this.state;
   
    return(
      <div className='sugcontent'>
      <div  >
     
      
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" >
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Reserve a Room</p>

                <form class="mx-1 mx-md-4" onSubmit={this.onSubmit}>














                  <div class="d-flex flex-row align-items-center mb-4">
                    
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example1c">Your Name</label>
                      <input type="text" id="form3Example1c" class="form-control" name="Name" value={this.state.Name}
    onChange={this.handleInputChange} />
                     
                    </div>
                  </div>



                  <div class="d-flex flex-row align-items-center mb-4">
                  
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example3c">Your Email</label>
                      <input type="email" id="form3Example3c" class="form-control" name="email" value={this.state.email}
    onChange={this.handleInputChange}/>
                      
                    </div>
                  </div>



                  <div class="d-flex flex-row align-items-center mb-4">
                   
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example4cd">Arival and Departure</label>
                  <DateRangePicker
  startDate={this.state.startDate}
  startDateId="your_unique_start_date_id" 
  endDate={this.state.endDate} 
  endDateId="your_unique_end_date_id" 
  onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} 
  focusedInput={this.state.focusedInput} 
  onFocusChange={focusedInput => this.setState({ focusedInput })} 
/>

                    </div>
                   </div>
  
                   
                   <div class="   d-flex  order-1 order-lg-2">
                <div class="d-flex flex-row align-items-center mb-4">
                   
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example4cd">No of Double Room</label>
                      <input type="number" id="form3Example4cd"    class="form-control" name="NoOfDoubleRooms" min="0"  value={this.state.NoOfDoubleRooms}
    onChange={this.handleInputChange}/>
                   </div> </div>


                   <div class="d-flex flex-row align-items-center mb-4">
                   
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example4cd">No of Suite Rooms</label>
                      <input type="number" id="form3Example4cd" class="form-control" name="NoOfSuiteRooms"  min="0" value={this.state.NoOfSuiteRooms}
    onChange={this.handleInputChange}/>
                       </div>
                   </div>

                   <div class="d-flex flex-row align-items-center mb-4">
                  
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example4cd">No of FamilyRooms</label>
                      <input type="number" id="form3Example4cd" class="form-control" name="NoOfFamilyRooms" min="0" value={this.state.NoOfFamilyRooms}
    onChange={this.handleInputChange}/>
                      </div>
                   </div></div>


                   <div class="   d-flex  order-1 order-lg-2">
                   <div class="d-flex flex-row align-items-center mb-4">
                   
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example4cd">No Of Adults</label>
                      <input type="number" id="form3Example4cd" class="form-control" name="NoOfAdults" min="0" value={this.state.NoOfAdults}
    onChange={this.handleInputChange}/>
                      
                    </div>
                   </div>


                   <div class="d-flex flex-row align-items-center mb-4">
                  
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example4cd"> No Of Childeren</label>
                      <input type="number" id="form3Example4cd" class="form-control" name="NoOfChilderen" min="0" value={this.state.NoOfChilderen}
    onChange={this.handleInputChange}/>
                      
                    </div>
                   </div>

                      </div>



                   <div class="d-flex flex-row align-items-center mb-4">
                    
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example4cd">Select Board Type</label>
                   <select class="form-select" name="Board_Type" aria-label="Disabled select example"  onChange={this.handleInputChange}>
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
                    
 
                    <button type="button" class="btn btn-primary btn-lg" onClick={this.onSubmit}>Reserve Room</button>
                  </div>













                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
  
                <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  class="img-fluid" alt="Sample image"/>
                 
                
              </div>
 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

     </div>
     </div>
    );
    }}


  

    //.then(window.location = "/bookeddetails")