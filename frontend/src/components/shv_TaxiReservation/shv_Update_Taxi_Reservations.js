import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";

export default class Shv_Update_Taxi_Reservations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fistName: "",
      lastName: "",
      mobileNumber: "",
      nic: "",
      email: "",
      typeoftaxi: "",
      condition: "",
      bookingDate: "",
      bookingTime: "",
      numberOfPassengers: "",
      pickupAddress: "",
      dropOffAddress: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const id = this.props.match.params.id;

    const {
      fistName,
      lastName,
      mobileNumber,
      nic,
      email,
      typeoftaxi,
      condition,
      bookingDate,
      bookingTime,
      numberOfPassengers,
      pickupAddress,
      dropOffAddress,
    } = this.state;

    const data = {
      fistName: fistName,
      lastName: lastName,
      mobileNumber: mobileNumber,
      nic: nic,
      email: email,
      typeoftaxi: typeoftaxi,
      condition: condition,
      bookingDate: bookingDate,
      bookingTime: bookingTime,
      numberOfPassengers: numberOfPassengers,
      pickupAddress: pickupAddress,
      dropOffAddress: dropOffAddress,
    };

    console.log(data);

    //Validation
    const con = /^[0-9\b]+$/;
    const Temail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const name = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    if (
      fistName.length == 0 ||
      lastName.length == 0 ||
      mobileNumber.length == 0 ||
      nic.length == 0 ||
      email.length == 0 ||
      typeoftaxi.length == 0 ||
      condition.length == 0 ||
      bookingDate.length == 0 ||
      bookingTime.length == 0 ||
      numberOfPassengers.length == 0 ||
      pickupAddress.length == 0 ||
      dropOffAddress.length == 0
    ) {
      swal("Feilds Cannot Be empty !!", "You Must fill all the feilds !!");
    } else if (!con.test(String(mobileNumber)) || mobileNumber.length != 10) {
      swal(
        "Invalid Contact Number !",
        "Please enter valid contact number !",
        "error"
      );
    } else if (!Temail.test(String(email))) {
      swal(
        "Invalid email address !",
        "Please enter valid email address !",
        "error"
      );
    } else if (!name.test(String(fistName))) {
      swal(
        "Invalid Name !",
        "Name cannot contain numbers ! Please enter valid name !",
        "error"
      );
    } else if (!name.test(String(lastName))) {
      swal(
        "Invalid Name !",
        "Name cannot contain numbers ! Please enter valid name !",
        "error"
      );
    } else {
      axios
        .put(`http://localhost:8280/room/updateRoom/${id}`, data)
        .then((res) => {
          if (res.data.success) {
            swal("Successful!", "Taxi Details Updated !", "success");
            this.setState({
              fistName: "",
              lastName: "",
              mobileNumber: "",
              nic: "",
              email: "",
              typeoftaxi: "",
              condition: "",
              bookingDate: "",
              bookingTime: "",
              numberOfPassengers: "",
              pickupAddress: "",
              dropOffAddress: "",
            });
          }
        }).then(function() {
          window.location = "/AllTaxi";
      });
    }
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8280/taxi/getTaxi/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          fistName: res.data.taxi.fistName,
          lastName: res.data.taxi.lastName,
          mobileNumber: res.data.taxi.mobileNumber,
          nic: res.data.taxi.nic,
          email: res.data.taxi.email,
          typeoftaxi: res.data.taxi.typeoftaxi,
          condition: res.data.taxi.condition,
          bookingDate: res.data.taxi.bookingDate,
          bookingTime: res.data.taxi.bookingTime,
          numberOfPassengers: res.data.taxi.numberOfPassengers,
          pickupAddress: res.data.taxi.pickupAddress,
          dropOffAddress: res.data.taxi.dropOffAddress,
        });

        console.log(this.state.taxi);
      }
    });
  }

  render() {
    return (
      <div>
        <div>
          <div className="card">
            <div>
              <center>
                <h1
                  className="h3 mb-3 font-weight-normal"
                  style={{ backgroundColor: "cyan" }}
                >
                  <font face="Comic sans MS" size="6">
                    <b>Update Taxi Reservation Details</b>
                  </font>
                </h1>
                <br />
                &nbsp;
              </center>
              <br />
              <center>
                <form className="needs-validation">
                  <div
                    className="form-group"
                    style={{ marginBottom: "15px", maxWidth: "500px" }}
                  >
                    <label style={{ marginBottom: "5px" }}>
                      <b>First Name</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="fistName"
                      placeholder="Enter fistName"
                      value={this.state.fistName}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>

                  <div
                    className="form-group"
                    style={{ marginBottom: "15px", maxWidth: "500px" }}
                  >
                    <label style={{ marginBottom: "5px" }}>
                      <b>Last Name</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      placeholder="lastName"
                      value={this.state.lastName}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>

                  <div
                    className="form-group"
                    style={{ marginBottom: "15px", maxWidth: "500px" }}
                  >
                    <label style={{ marginBottom: "5px" }}>
                      <b>Mobile Number</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="mobileNumber"
                      placeholder="Enter contact number"
                      value={this.state.mobileNumber}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>

                  <div
                    className="form-group"
                    style={{ marginBottom: "15px", maxWidth: "500px" }}
                  >
                    <label style={{ marginBottom: "5px" }}>
                      <b>NIC</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="nic"
                      placeholder="Enter nic"
                      value={this.state.nic}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>

                  <div
                    className="form-group"
                    style={{ marginBottom: "15px", maxWidth: "500px" }}
                  >
                    <label style={{ marginBottom: "5px" }}>
                      <b>Email</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      placeholder="Enter email"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginBottom: "5px" }}>
                      <b>Type Of Taxi</b>
                    </label>

                    <select
                      className="form-control"
                      style={{ marginBottom: "15px", maxWidth: "500px" }}
                      name="typeoftaxi"
                      value={this.state.typeoftaxi}
                      onChange={this.handleInputChange}
                      required
                    >
                      <option value="" disabled selected hidden>
                        Please Choose...
                      </option>
                      <option value="Car">Car</option>
                      <option value="Van">Van</option>
                      <option value="Bus">Bus</option>
                      <option value="Tuk">Tuk</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label style={{ marginBottom: "5px" }}>
                      <b>Condition</b>
                    </label>

                    <select
                      className="form-control"
                      style={{ marginBottom: "15px", maxWidth: "500px" }}
                      name="condition"
                      value={this.state.condition}
                      onChange={this.handleInputChange}
                      required
                    >
                      <option value="" disabled selected hidden>
                        Please Choose...
                      </option>
                      <option value="AC">AC</option>
                      <option value="Non/AC">Non/AC</option>
                    </select>
                  </div>

                  <div
                    className="form-group"
                    style={{ marginBottom: "15px", maxWidth: "500px" }}
                  >
                    <label style={{ marginBottom: "5px" }}>
                      <b>Booking Date</b>
                    </label>
                    <input
                      type="Date"
                      className="form-control"
                      name="bookingDate"
                      placeholder="Enter booking date"
                      value={this.state.bookingDate}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>

                  <div
                    className="form-group"
                    style={{ marginBottom: "15px", maxWidth: "500px" }}
                  >
                    <label style={{ marginBottom: "5px" }}>
                      <b>Booking Time</b>
                    </label>
                    <input
                      type="time"
                      className="form-control"
                      name="bookingTime"
                      placeholder="Enter booking time"
                      value={this.state.bookingTime}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>

                  <div
                    className="form-group"
                    style={{ marginBottom: "15px", maxWidth: "500px" }}
                  >
                    <label style={{ marginBottom: "5px" }}>
                      <b>Number Of Passengers</b>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="numberOfPassengers"
                      placeholder="No of passengers"
                      value={this.state.numberOfPassengers}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>

                  <div
                    className="form-group"
                    style={{ marginBottom: "15px", maxWidth: "500px" }}
                  >
                    <label style={{ marginBottom: "5px" }}>
                      <b>Pick Up Address</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="pickupAddress"
                      placeholder="Enter Pick Up Address"
                      value={this.state.pickupAddress}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>

                  <div
                    className="form-group"
                    style={{ marginBottom: "15px", maxWidth: "500px" }}
                  >
                    <label style={{ marginBottom: "5px" }}>
                      <b>Drop Off Address</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="dropOffAddress"
                      placeholder="Enter drop off address"
                      value={this.state.dropOffAddress}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>

                  <button
                    className="btn btn-success btn-lg"
                    type="submit"
                    style={{ marginTop: "15px" }}
                    onClick={this.onSubmit}
                  >
                    &nbsp; Update
                  </button>
                </form>
              </center>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
      </div>
    );
  }
}
