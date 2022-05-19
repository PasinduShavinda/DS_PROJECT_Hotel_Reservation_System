import React, { Component } from 'react';
import axios from 'axios';
import jsPdf from 'jspdf'
import 'jspdf-autotable'

export default class Shv_View_Taxi_Reservations extends Component {
  
  constructor(props){
    super(props);

    this.state={
      taxi:{}
    };
  }

  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`http://localhost:8280/taxi/getTaxi/${id}`).then((res) =>{

      if(res.data.success){
        this.setState({
          taxi:res.data.taxi
        });

        console.log(this.state.taxi);
      }
    })

  }
  
  //Report pdf generating
  jsPdfGenerator = () => {
  
    //new document in jspdf
    var doc = new jsPdf('l', 'pt', 'a4');
    doc.text(350, 40 ,'Reservation Details');
    var pdfjs = document.querySelector('#taxiReservation');
    var date = new Date()
    doc.text("Generated Date : " + date,24,24)

	// Convert HTML to PDF in JavaScript
	doc.html(pdfjs, {
		callback: function(doc) {
			doc.save("Booking Details.pdf");
		},
		x: 50,
		y: 50
	});
  }



  render() {
    const {fistName,lastName,mobileNumber,nic,email,typeoftaxi,condition,bookingDate,bookingTime,numberOfPassengers,pickupAddress ,dropOffAddress} = this.state.taxi;

    return(
      <div>
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

          <dl id = "taxiReservation" className="row">

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
          <button className="btn btn-danger" onClick={this.jsPdfGenerator}>Download PDF</button>
        </div>
      </div>
      </div>
  
  
  )
      

  }
}