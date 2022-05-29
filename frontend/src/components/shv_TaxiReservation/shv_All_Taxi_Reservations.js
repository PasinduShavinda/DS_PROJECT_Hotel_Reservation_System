import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";

export default class Shv_All_Taxi_Reservations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      TaxiPosts: [],
    };
  }

  componentDidMount() {
    this.retrieveTaxiPosts();
  }

  retrieveTaxiPosts() {
    axios.get("http://localhost:8280/taxi/getTaxi").then((res) => {
      if (res.data.success) {
        this.setState({
          TaxiPosts: res.data.existingtaxi,
        });
        console.log(this.state.TaxiPosts);
      }
    });
  }

  onDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Taxi Booking Details!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:8280/taxi/deleteTaxi/${id}`)
          .then((res) => {
            this.retrieveTaxiPosts();
          });
        swal("Done! Your Taxi Booking was cancelled!", {
          icon: "success",
        });
      } else {
        swal("Not deleted ! Taxi Booking Details are safe !");
      }
    });
  };

  filterData(TaxiPosts, searchKey) {
    const result = TaxiPosts.filter(
      (TaxiPost) =>
        TaxiPost._id.toLowerCase().includes(searchKey) ||
        TaxiPost.fistName.toLowerCase().includes(searchKey) ||
        TaxiPost.lastName.toLowerCase().includes(searchKey) ||
        TaxiPost.mobileNumber.toLowerCase().includes(searchKey) ||
        TaxiPost.nic.toLowerCase().includes(searchKey) ||
        TaxiPost.typeoftaxi.toLowerCase().includes(searchKey) ||
        TaxiPost.condition.toLowerCase().includes(searchKey) ||
        TaxiPost.bookingDate.toLowerCase().includes(searchKey) ||
        TaxiPost.bookingTime.toLowerCase().includes(searchKey) ||
        TaxiPost.numberOfPassengers.toLowerCase().includes(searchKey) ||
        TaxiPost.pickupAddress.toLowerCase().includes(searchKey) ||
        TaxiPost.dropOffAddress.toLowerCase().includes(searchKey)
    );
    this.setState({ TaxiPosts: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8280/taxi/getTaxi").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingtaxi, searchKey);
      }
    });
  };

  render() {
    return (
      <div>
        {/* <Shv_Taxi_NavBar /> */}

        <div>
          <center>
            <h3 style={{ marginTop: "5%" }}>
              <font face="Comic sans MS" size="6">
                <b>Reserved Taxis</b>
              </font>
            </h3>
          </center>
          <br />

          <nav className="navbar navbar-light bg-light">
            <a  href="/"
                style={{ textDecoration: "none", color: "white" }}><button className="btn btn-success">
                  Back
            </button>
            </a>

            <form className="form-inline">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                name="searchQuery"
                onChange={this.handleSearchArea}
              />
            </form>
          </nav>

          <table className="table table-hover">
            <thead>
              <tr className="table-primary">
                <th scope="col">#</th>
                <th scope="col">Reference No</th>
                <th scope="col">First name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Contact number</th>
                <th scope="col">NIC</th>
                <th scope="col">Email</th>
                <th scope="col">Type of Taxi</th>
                <th scope="col">Condition</th>
                <th scope="col">Booking Date</th>
                <th scope="col">Booking Time</th>
                <th scope="col">No Of Passengers</th>
                <th scope="col">Pickup Addess</th>
                <th scope="col">Drop Off Address</th>
                <th scope="col">View</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.TaxiPosts.map((TaxiPosts, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>

                  <td>
                    <a
                      href={`/ViewTaxi/${TaxiPosts._id}`}
                      style={{ textDecoration: "none" }}
                    >
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
                  <td>{TaxiPosts.pickupAddress}</td>
                  <td>{TaxiPosts.dropOffAddress}</td>

                  <td>
                    <a
                      className="btn btn-primary"
                      href={`/ViewTaxi/${TaxiPosts._id}`}
                    >
                      View
                    </a>
                  </td>

                  <td>
                    <a
                      className="btn btn-warning"
                      href={`/UpdateTaxi/${TaxiPosts._id}`}
                    >
                      Edit
                    </a>
                  </td>

                  <td>
                    <a
                      className="btn btn-danger"
                      onClick={(event) => this.onDelete(TaxiPosts._id)}
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <br />
          <br />

          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}
