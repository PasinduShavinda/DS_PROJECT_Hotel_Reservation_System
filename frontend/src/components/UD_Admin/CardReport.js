import React, { Component } from "react";
import axios from "axios";
import jsPdf from "jspdf";
import "jspdf-autotable";
import swal from "sweetalert";

class CardReport extends Component {
  constructor(props) {
    super(props);

    this.state = {
      CardPosts: [],
    };
  }

  //call the link
  componentDidMount() {
    this.retrieveCardPosts();
  }

  retrieveCardPosts() {
    axios.get("http://localhost:8280/cardpay/getCardpay").then((res) => {
      if (res.data.success) {
        this.setState({
          CardPosts: res.data.existingcard,
        });

        console.log(this.state.CardPosts);
      }
    });
  }

  //search
  filterData(CardPosts, searchKey) {
    const result = CardPosts.filter(
      (CardPosts) =>
        CardPosts.customerName.toLowerCase().includes(searchKey) ||
        CardPosts.expiry.toLowerCase().includes(searchKey)
    );

    this.setState({ CardPosts: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8280/cardpay/getCardpay").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingcard, searchKey);
      }
    });
  };

  jsPdfGenerator = () => {
    swal("Done!", "Your Report is Downloding!", "success");

    //new document in jspdf
    var doc = new jsPdf("l", "pt", "a3");

    doc.text(600, 20, "Payment Details Report", { align: "center" });
    doc.autoTable({ html: "#payment-table" });

    doc.autoTable({
      columnStyles: { europe: { halign: "center" } },
      margin: { top: 10 },
    });

    //save the pdf
    doc.save("Payments Details.pdf");
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4>Payment details</h4>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search by Customer Name"
              onChange={this.handleSearchArea}
            ></input>
          </div>
        </div>

        <table id="payment-table" className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col"> Enter Payment</th>
              <th scope="col"> Card Number</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Expire Date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.CardPosts.map((CardPosts, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>

                <td>{CardPosts.enterPayment}</td>
                <td>{CardPosts.cardnumber}</td>
                <td>{CardPosts.customerName}</td>
                <td>{CardPosts.expiry}</td>
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
        <br></br>
        <div className="form-group">
          <a class="btn btn-outline-primary btn-lg" href="/cardHomeAdmin">
            Back
          </a>
        </div>
      </div>
    );
  }
}

export default CardReport;
