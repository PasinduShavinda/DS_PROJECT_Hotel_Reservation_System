import React, { Component } from 'react';
import axios from 'axios';

export default class ReservationDetails extends Component{



    constructor(props){
        super(props);
        this.state={
            reservation:{}
        };
    
        }
    componentDidMount(){
    
        const id=this.props.match.params.id;
        axios.get(`http://localhost:8280/room/getRoom/${id}`).then((res)=>{
    
        if (res.data.success){
            this.setState({
                
                reservation:res.data.reservation
            });
            console.log(this.state.reservation);
        }
    
    
        })
    }  
 
          

  render() {
    const{Name,email,Checking,Checkout,NoOfRooms,NoOfPeople}=this.state.reservation;
    return(
     <div>

      <h1>{Name}</h1> 
      <h2>{email}</h2>
      <h2>{Checking}</h2>
      <h2>{Checkout}</h2>
      <h2>{NoOfRooms}</h2>
      <h2>{NoOfPeople}</h2>
     </div>
    );
  }
}