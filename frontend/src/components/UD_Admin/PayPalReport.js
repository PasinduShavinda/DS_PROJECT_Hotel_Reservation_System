import React, { Component } from "react";
import axios from "axios";
import jsPdf from "jspdf";
import "jspdf-autotable";
import swal from "sweetalert";

class PayPalPeport extends Component {
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

  jsPdfGenerator = () => {
    swal("Done!", "Your Report is Downloding!", "success");

    //new document in jspdf
    var doc = new jsPdf("l", "pt", "a3");

    doc.text(600, 20, "Paypal Details Report", { align: "center" });
    doc.autoTable({ html: "#paypal-table" });

    doc.autoTable({
      columnStyles: { europe: { halign: "center" } },
      margin: { top: 10 },
    });

    //save the pdf
    doc.save("Paypal Details.pdf");
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4> Paypal details</h4>
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

        <table id="paypal-table" className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Enter Payment</th>
              <th scope="col"> Customer Name</th>
              <th scope="col">Customer Email</th>
              <th scope="col">Customer Password</th>
            </tr>
          </thead>
          <tbody>
            {this.state.PaypalPosts.map((PaypalPosts, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{PaypalPosts.cpayment}</td>
                <td>{PaypalPosts.cname}</td>
                <td>{PaypalPosts.cemail}</td>
                <td>{PaypalPosts.cpassword}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="btn btn-outline-primary"
          onClick={this.jsPdfGenerator}
        >
          <b>Downlod Report PDF</b>
        </button>
        <br></br>
        <div className="form-group">
          <a class="btn btn-outline-primary btn-lg" href="/payPalHomeAdmin">
            Back
          </a>
        </div>
      </div>
    );
  }
}

export default PayPalPeport;
