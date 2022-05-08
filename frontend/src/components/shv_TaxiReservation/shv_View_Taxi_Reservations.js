import React, { Component } from 'react';
import axios from 'axios';
import Shv_Taxi_NavBar from '../shv_NavBars/shv_Taxi_NavBar';

export default class Shv_View_Taxi_Reservations extends Component {
  
  constructor(props){
    super(props);

    this.state={
      taxi:{}
    };
  }

  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`http://localhost:8001/postTaxi/${id}`).then((res) =>{

      if(res.data.success){
        this.setState({
          taxi:res.data.taxi
        });

        console.log(this.state.taxi);
      }
    })

  }
  
  render() {
    const {fistName,lastName,mobileNumber,nic,email,typeoftaxi,condition,bookingDate,bookingTime,numberOfPassengers,pickupAddress ,dropOffAddress} = this.state.taxi;

    return(
      <div>
      <Shv_Taxi_NavBar/>
      <div className="container border"

        style={{

          marginTop: "80px",

          width: '100%',

          backgroundImage: `url('https://bhiroof.com/wp-content/uploads/2020/10/empty-living-room-with-blue-sofa-plants-table-empty-white-wall-background-3d-rendering_41470-1778.jpg')`,

          backgroundPosition: 'center',

          backgroundSize: 'cover',

        }}>

        <div style={{ marginTop: '20px' }}>

          <h1>Taxi Reservation Details</h1>
          <br/>

          <dl className="row">

            <dt className="col-sm-2">First Name</dt><br></br>
            <dd className="col-sm-9">{fistName}</dd><br></br>

            <dt className="col-sm-2">Last Name</dt><br></br>
            <dd className="col-sm-9">{lastName}</dd><br></br>

            <dt className="col-sm-2">Mobile Number</dt><br></br>
            <dd className="col-sm-9">{mobileNumber}</dd><br></br>

            <dt className="col-sm-2">NIC</dt><br></br>
            <dd className="col-sm-9">{nic}</dd><br></br>

            <dt className="col-sm-2">Email</dt><br></br>
            <dd className="col-sm-9">{email}</dd><br></br>

            <dt className="col-sm-2">Type Of Taxi</dt><br></br>
            <dd className="col-sm-9">{typeoftaxi}</dd><br></br>

            <dt className="col-sm-2">Condition</dt><br></br>
            <dd className="col-sm-9">{condition}</dd><br></br>

            <dt className="col-sm-2">Booking Date</dt><br></br>
            <dd className="col-sm-9">{bookingDate}</dd><br></br>

            <dt className="col-sm-2">Booking Time</dt><br></br>
            <dd className="col-sm-9">{bookingTime}</dd><br></br>

            <dt className="col-sm-2">Passengers</dt><br></br>
            <dd className="col-sm-9">{numberOfPassengers}</dd><br></br>

            <dt className="col-sm-2">Pick Up address</dt><br></br>
            <dd className="col-sm-9">{pickupAddress }</dd><br></br>

            <dt className="col-sm-2">Drop Off Address</dt><br></br>
            <dd className="col-sm-9">{dropOffAddress}</dd><br></br>


          </dl>

        </div>
      </div>
      </div>
  
  
  )
      

  }
}