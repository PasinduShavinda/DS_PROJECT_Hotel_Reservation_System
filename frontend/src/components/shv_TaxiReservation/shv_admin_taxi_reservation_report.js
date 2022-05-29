import React, { Component } from 'react'
import axios from 'axios';
import jsPdf from 'jspdf'
import 'jspdf-autotable'

export default class Shv_AdminTaxiReport extends Component {
    constructor(props){
        super(props);

        this.state={

            TaxiPosts:[]
        };
    }

    componentDidMount(){ 

        this.retrieveTaxiPosts();
    }

    retrieveTaxiPosts(){
        axios.get("http://localhost:8280/taxi/getTaxi").then(res=>{
            if(res.data.success){
                this.setState({
                    TaxiPosts:res.data.existingtaxi
                });
                console.log(this.state.TaxiPosts);
            }
        });
    }




    filterData(TaxiPosts, searchKey){

        const result = TaxiPosts.filter((TaxiPost) => 
        TaxiPost._id.toLowerCase().includes(searchKey)||
        TaxiPost.fistName.toLowerCase().includes(searchKey)||
        TaxiPost.lastName.toLowerCase().includes(searchKey)||
        TaxiPost.mobileNumber.toLowerCase().includes(searchKey)||
        TaxiPost.nic.toLowerCase().includes(searchKey)||
        TaxiPost.typeoftaxi.toLowerCase().includes(searchKey)||
        TaxiPost.condition.toLowerCase().includes(searchKey)||
        TaxiPost.bookingDate.toLowerCase().includes(searchKey)||
        TaxiPost.bookingTime.toLowerCase().includes(searchKey)||
        TaxiPost.numberOfPassengers.toLowerCase().includes(searchKey)||
        TaxiPost.pickupAddress .toLowerCase().includes(searchKey)||
        TaxiPost.dropOffAddress.toLowerCase().includes(searchKey) 
    
      )
      this.setState({TaxiPosts:result})
    }
    
    
    handleSearchArea = (e) =>{
    
      const searchKey = e.currentTarget.value;
    
      axios.get("http://localhost:8280/taxi/getTaxi").then(res =>{
    
        if(res.data.success){
    
          this.filterData(res.data.existingtaxi, searchKey)
    
        }
      })
    }


    
  //Report pdf generating
  jsPdfGenerator = () => {

    //new document in jspdf
    var doc = new jsPdf('l','pt', 'a3');
    var date = new Date()
    doc.text("Generated Date : " + date,24,24)
    doc.text(600, 40 ,'Taxi Reservation Report', { align: 'center', marginTop:50 });
    doc.autoTable({  html:'#taxiReservation-table' })

    doc.autoTable({
      columnStyles: { europe: { halign: 'center' } }, 
    })

    //save the pdf
    doc.save("Taxi Reservation Report.pdf");
  }
    


  render() {
    return (
        <div>


        <div>
  
            <center>
            <h3 style = {{marginTop:'5%'}}><font face = "Comic sans MS" size ="6"><b>Report Reserved Taxis</b></font></h3>
            </center>
            <br/>
       
        
        <nav className="navbar navbar-light bg-light">

        <button className="btn btn-danger" onClick={this.jsPdfGenerator}>Generate Report PDF</button>

         
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name = "searchQuery"
          onChange = {this.handleSearchArea} />
            </form>
        </nav>
  
    
          
          <table id = "taxiReservation-table" className = "table table-hover" >
          <thead>
          <tr className = "table-primary">
               <th scope = "col">#</th> 
               <th scope = "col">Reference No</th> 
               <th scope = "col">First name</th> 
               <th scope = "col">Last Name</th> 
               <th scope = "col">Contact number</th>
               <th scope = "col">NIC</th>
               <th scope = "col">Email</th>
               <th scope = "col">Type of Taxi</th>
               <th scope = "col">Condition</th>
               <th scope = "col">Booking Date</th>
               <th scope = "col">Booking Time</th>
               <th scope = "col">No Of Passengers</th>
               <th scope = "col">Pickup Addess</th>
               <th scope = "col">Drop Off Address</th>
       
  
               </tr>
           </thead> 
           <tbody>
            {this.state.TaxiPosts.map((TaxiPosts, index) =>(
  
              <tr key = {index}>
                <th scope = "row">{index+1}</th>
  
                    <td>
                    <a href = {`/ViewTaxi/${TaxiPosts._id}`} style = {{textDecoration:'none'}}>
                    {TaxiPosts._id}
                    </a>
                    </td>
                    <td>{TaxiPosts.fistName}</td>
                    <td>{TaxiPosts.lastName}</td>
                    <td>{TaxiPosts.mobileNumber}</td>
                    <td>{TaxiPosts.nic}</td>
                    <td>{TaxiPosts.email}</td>
                    <td>{TaxiPosts.typeoftaxi}</td>
                    <td>{TaxiPosts.condition}</td>
                    <td>{TaxiPosts.bookingDate}</td>
                    <td>{TaxiPosts.bookingTime}</td>
                    <td>{TaxiPosts.numberOfPassengers}</td>
                    <td>{TaxiPosts.pickupAddress }</td>
                    <td>{TaxiPosts.dropOffAddress}</td>

          
              </tr>
              ))}
            </tbody>
           </table>
  
           <br/><br/>
                     

           <br/><br/><br/>
      
         </div> 
         &nbsp;<a href = "/"><button className="btn btn-info">Back</button></a>
         </div>
    )
  }
}
