import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";

class PayPalHomeAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      PaypalPosts: [],
    };
  }

  //call the link
  componentDidMount() {
    this.retrievePaypalPosts();
  }
  retrievePaypalPosts() {
    axios.get("http://localhost:8280/paypal/getPaypal").then((res) => {
      if (res.data.success) {
        this.setState({
          PaypalPosts: res.data.existingpaypal,
        });

        console.log(this.state.PaypalPosts);
      }
    });
  }

  //delete function
  onDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this category details !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:8280/paypal/deletePaypal/${id}`)
          .then((res) => {
            swal("Deleted Successfully");
            this.retrievePaypalPosts();
          });
        swal("Done! Payment Details has been Deleted!", {
          icon: "success",
        });
      } else {
        swal("Not Deleted! Your Payment details are Safe!");
      }
    });
    console.log("delete me");
  };

  //search function start here

  filterData(PaypalPosts, searchKey) {
    const result = PaypalPosts.filter(
      (PaypalPosts) =>
        PaypalPosts.cname.toLowerCase().includes(searchKey) ||
        PaypalPosts.cemail.toLowerCase().includes(searchKey)
    );

    this.setState({ PaypalPosts: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8280/paypal/getPaypal").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingpaypal, searchKey);
      }
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4>Search Paypal details</h4>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search by Customer Name and Email"
              onChange={this.handleSearchArea}
            ></input>
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Enter Payment</th>
              <th scope="col"> Customer Name</th>
              <th scope="col">Customer Email</th>
              <th scope="col">Customer Password</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.PaypalPosts.map((PaypalPosts, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{PaypalPosts.cpayment}</td>
                {/* <td>
                  <a
                    href={`/payPalDetails/${PaypalPosts._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {PaypalPosts.cname}
                  </a>
                </td> */}
                <td>{PaypalPosts.cname}</td>
                <td>{PaypalPosts.cemail}</td>
                <td>{PaypalPosts.cpassword}</td>

                <td>
                  {/* <a className="btn btn-primary" href="mail">
                    <i className="fas fa-edit"></i>&nbsp;Request
                  </a> */}
                  &nbsp; &nbsp;
                  <a
                    className="btn btn-warning"
                    href={`/payPalUpdateAdmin/${PaypalPosts._id}`}
                  >
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      this.onDelete(PaypalPosts._id);
                    }}
                  >
                    <i className="fas fa-trash-alt"></i>&nbsp;Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br></br>
        <div className="form-group">
          <a class="btn btn-outline-primary btn-lg" href="/adminHome">
            Back
          </a>
        </div>
        <br></br>
        <button className="btn btn-primary">
          <a
            href="/payPalPeport"
            style={{ textDecoration: "none", color: "white" }}
          >
            Create Report Paypal
          </a>{" "}
        </button>
      </div>
    );
  }
}

export default PayPalHomeAdmin;
