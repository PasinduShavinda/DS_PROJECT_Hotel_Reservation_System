import React, { Component } from 'react';
import axios from 'axios';

export default class EventReservationDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            EventReservation:{}
        };
    
    }

    componentDidMount(){
    
        const id=this.props.match.params.id;
        axios.get(`http://localhost:8280/event/getEvent/${id}`).then((res)=>{
    
            if (res.data.success){
                this.setState({
                    EventReservation:res.data.EventReservation
                });
                console.log(this.state.EventReservation);
            }
    
    
        })
    }  
 
          

    render() {
        const{fullName,email,nic,mobileNumber,bookingDate,bookingTime,numberOfGustes,eventType,eventHall}=this.state.EventReservation;

        return(
            <div>
                <h1>{fullName}</h1> 
                <h2>{email}</h2>
                <h2>{nic}</h2>
                <h2>{mobileNumber}</h2>
                <h2>{bookingDate}</h2>
                <h2>{bookingTime}</h2>
                <h2>{numberOfGustes}</h2>
                <h2>{eventType}</h2>
                <h2>{eventHall}</h2>
            </div>
         );
    }
}